import { Auth, getAuth, signOut } from "firebase/auth";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FIREBASE_APP from "../../lib/firebase/config";
import { styles } from "../../styles/profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faGear } from "@fortawesome/free-solid-svg-icons";

const auth = getAuth(FIREBASE_APP);

export default function ({ navigation }: any) {
  const { user } = useSelector((state: any) => state.user);

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
      <Pressable
        onPress={() => navigation.navigate("Canvas")}
        style={styles.closeButton}
      >
        <FontAwesomeIcon icon={faXmark} color='#dadada' size={50} />
      </Pressable>
      <Text>{`Signed in as ${user.displayName ? user.displayName : user.email}`}</Text>
      <Pressable
        onPress={() => navigation.navigate("Settings")}
        style={styles.profileSettingsButton}
      >
        <FontAwesomeIcon icon={faGear} color='#dadada' size={50} />
      </Pressable>
      <Pressable onPress={() => signOutUser(auth)} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}
