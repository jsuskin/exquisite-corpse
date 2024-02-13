import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { TextInput } from "react-native";
import { styles } from "../../styles/login";
import { Button } from "../Login/Form/FormElements";
import FIREBASE_APP from "../../lib/firebase/config";
import { getAuth, updateProfile, User } from "firebase/auth";

const auth = getAuth(FIREBASE_APP);

export default function ({ navigation }: any) {
  const [displayName, setDisplayName] = useState("");

  const handleSaveChanges = () => {
    updateProfile(auth.currentUser as User, {
      displayName,
    })
      .then(() => {
        console.log(`Profile updated successfully for ${displayName}.`);
        navigation.navigate("Profile")
      })
      .catch((error: any) => {
        console.error("There was an error updating your profile.", error);
      });
  };

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text>SETTINGS</Text>
      <KeyboardAvoidingView behavior='padding'>
        <Text>Set Your Display Name</Text>
        <TextInput
          placeholder='Display Name'
          value={displayName}
          onChangeText={setDisplayName}
          style={[styles.textInput, styles.formElement]}
        />
        <Button
          handlePress={handleSaveChanges}
          text='Save Changes'
          />
      </KeyboardAvoidingView>
    </View>
  );
}

// disabled={!!displayName.length}