import { Auth, getAuth, signOut, User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayName } from "../../redux/reducers/userSlice";
import FIREBASE_APP from "../../lib/firebase/config";
import { styles } from "../../styles/profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faGear } from "@fortawesome/free-solid-svg-icons";
import { addDataToCollection } from "../../util/helper-methods/firebase";
import { Button } from "../Login/Form/FormElements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const auth = getAuth(FIREBASE_APP);

export default function ({ navigation }: any) {
  const user = auth.currentUser as User;
  const dispatch = useDispatch();
  const { displayName, email } = useSelector((state: any) => state.user);

  const handleSetDisplayName: any = (displayName: string) => {
    dispatch(setDisplayName(displayName));
  };

  const handleStartNewDrawing = () => {
    addDataToCollection("drawings", { startedBy: displayName });
  };

  useEffect(() => {
    handleSetDisplayName(user.displayName ? user.displayName : user.email);
  }, [user.displayName]);

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
      <IconButton toRoute='Canvas' styleKey='closeButton' icon={faXmark} />
      <Text>{`Signed in as ${displayName ? displayName : email}`}</Text>
      <IconButton toRoute='Settings' styleKey='settingsButton' icon={faGear} />
      <Button handlePress={() => signOutUser(auth)} text='Sign Out' />
      <Button
        handlePress={handleStartNewDrawing}
        text='New Drawing'
      />
    </View>
  );
}

const IconButton = ({ toRoute, styleKey, icon }: any) => {
  const navigation: NavigationProp = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(toRoute)}
      style={(styles as any)[styleKey]}
    >
      <FontAwesomeIcon icon={icon} color='#dadada' size={50} />
    </Pressable>
  );
};
