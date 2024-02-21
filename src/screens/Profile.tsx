import { Auth, getAuth, signOut, User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Pressable, Text, View, ToastAndroid } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayName } from "../redux/reducers/userSlice";
import FIREBASE_APP from "../lib/firebase/config";
import { styles } from "../styles/profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faGear } from "@fortawesome/free-solid-svg-icons";
import {
  addDataToCollection,
  readDataFromCollection,
  getUserByDisplayName,
} from "../util/helper-methods/firebase";
import { Button } from "../components/Form/FormElements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { FormInput } from "../components/Form/FormElements";
import { serverTimestamp } from "firebase/firestore";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type Profile = { navigation: NavigationProp };

const auth = getAuth(FIREBASE_APP);

export default function ({ navigation }: Profile) {
  const [newDrawingFormOpen, setNewDrawingFormOpen] = useState(false);
  const [newDrawingUsername, setNewDrawingUsername] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  const user = auth.currentUser as User;
  const dispatch = useDispatch();
  const { displayName, email } = useSelector((state: any) => state.user);

  const handleSetDisplayName: any = (displayName: string) => {
    dispatch(setDisplayName(displayName));
  };

  const handleOpenNewDrawingForm = () => setNewDrawingFormOpen(true);

  const handleSubmitNewDrawingRequest = async () => {
    const recipientUser = await getUserByDisplayName(newDrawingUsername);

    if (recipientUser) {
      const response = await addDataToCollection("messages", {
        from: displayName,
        to: recipientUser,
        message: `Accept new drawing request from ${displayName}?`,
        status: "unread",
        createdAt: serverTimestamp(),
      });

      if (response) {
        setRequestSent(true);
        setNewDrawingUsername("");
        setNewDrawingFormOpen(false);
        navigation.navigate("Canvas");
      }
    }
  };

  useEffect(() => {
    handleSetDisplayName(user.displayName ? user.displayName : user.email);
  }, [user.displayName]);

  useEffect(() => {
    if (requestSent) {
      ToastAndroid.showWithGravity(
        "Request Sent!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );

      setRequestSent(false);
    }
  }, [requestSent]);

  async function signOutUser(auth: Auth) {
    try {
      await signOut(auth);
      return { success: true, message: "User signed out successfully." };
    } catch (error) {
      console.error("Error signing out:", error);
      return { success: false, message: "Error signing out user." };
    }
  }

  return (
    <View style={styles.profile}>
      <IconButton
        handlePress={() => navigation.navigate("Canvas")}
        styleKey='closeButton'
        icon={faXmark}
      />
      <Text>{`Signed in as ${displayName ? displayName : email}`}</Text>
      <IconButton handlePress={() => navigation.navigate("Settings")} styleKey='settingsButton' icon={faGear} />
      <Button handlePress={() => signOutUser(auth)} text='Sign Out' />
      {newDrawingFormOpen ? (
        <>
          <FormInput
            placeholder='Type a username'
            value={newDrawingUsername}
            setState={setNewDrawingUsername}
          />
          <Button
            handlePress={handleSubmitNewDrawingRequest}
            text='Start Drawing!'
          />
        </>
      ) : (
        <Button handlePress={handleOpenNewDrawingForm} text='New Drawing' />
      )}
      <Button
        handlePress={() => navigation.navigate("Messages")}
        text='View Messages'
      />
    </View>
  );
}

const IconButton = ({ handlePress, styleKey, icon }: any) => {
  return (
    <Pressable
      onPress={handlePress}
      style={(styles as any)[styleKey]}
    >
      <FontAwesomeIcon icon={icon} color='#dadada' size={50} />
    </Pressable>
  );
};
