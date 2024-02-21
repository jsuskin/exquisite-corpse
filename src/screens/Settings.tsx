import { User, getAuth, updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FIREBASE_APP from "../lib/firebase/config";
import { setDisplayName } from "../redux/reducers/userSlice";
import { styles } from "../styles/login";
import { Button } from "../components/Form/FormElements";

const auth = getAuth(FIREBASE_APP);

export default function ({ navigation }: any) {
  const user = auth.currentUser as User;
  const { displayName } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const handleSetDisplayName: any = (displayName: string) => {
    dispatch(setDisplayName(displayName));
  };

  const handleSaveChanges = () => {
    updateProfile(auth.currentUser as User, {
      displayName,
    })
      .then(() => {
        console.log(`Profile updated successfully for ${displayName}.`);
        navigation.navigate("Profile");
      })
      .catch((error: any) => {
        console.error("There was an error updating your profile.", error);
      });
  };

  useEffect(() => {
    if (user.displayName) handleSetDisplayName(user.displayName);
  }, []);

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text>SETTINGS</Text>
      <KeyboardAvoidingView behavior='padding'>
        <Text>Set Your Display Name</Text>
        <TextInput
          placeholder='Display Name'
          value={displayName}
          onChangeText={handleSetDisplayName}
          style={[styles.textInput, styles.formElement]}
        />
        <Button handlePress={handleSaveChanges} text='Save Changes' />
      </KeyboardAvoidingView>
    </View>
  );
}
