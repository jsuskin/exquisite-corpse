import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import React, { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, View } from "react-native";
import { useDispatch } from "react-redux";
import FIREBASE_APP from "../../../lib/firebase/config";
import { setUser } from "../../../redux/reducers/userSlice";
import { styles } from "../../../styles/login";
import { Button, FormInput } from "./FormElements";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { addDataToCollection } from "../../../util/helper-methods/firebase";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const auth = getAuth(FIREBASE_APP);

export default function () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation: NavigationProp = useNavigation();

  const dispatch = useDispatch();

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log({ response: response.user });
    } catch (error: any) {
      console.error(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {displayName: username})
      const { displayName, uid } = user;
      addDataToCollection("users", { uid, displayName });
      console.log("\n\n\nHELLO RIGHT FUCKING HERE\n\n\n", {});
    } catch (error: any) {
      console.error(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log({ user });
      const uid = user.uid;
      console.log({ uid });
      dispatch(setUser({ email: user.email }));
      navigation.navigate("Canvas");
    } else {
      console.log("user signed out");
      navigation.navigate("Login");
    }
  });

  return (
    <View style={styles.form}>
      <KeyboardAvoidingView behavior='padding'>
        <FormInput
          placeholder='Username'
          value={username}
          setState={setUsername}
        />
        <FormInput placeholder='Email' value={email} setState={setEmail} />
        <FormInput
          placeholder='Password'
          value={password}
          setState={setPassword}
          props={{ secureTextEntry: true }}
        />
        {loading ? (
          <ActivityIndicator size='large' color='#0000ff' />
        ) : (
          <>
            <Button handlePress={signIn} text='Sign In' />
            <Button handlePress={signUp} text='Sign Up' />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
