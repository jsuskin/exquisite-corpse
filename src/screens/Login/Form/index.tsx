import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  View
} from "react-native";
import { styles } from "../../../styles/login";
import { Button, FormInput } from "./FormElements";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FIREBASE_APP from "../../../lib/firebase/config";

const auth = getAuth(FIREBASE_APP);

export default function ({navigation}: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ response });
    } catch (error: any) {
      console.error(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log({ user });
      const uid = user.uid;
      console.log({ uid });
      navigation.navigate("Canvas");
    } else {
      console.log("user signed out");
    }
  });

  return (
    <View style={styles.form}>
      <KeyboardAvoidingView behavior='padding'>
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
