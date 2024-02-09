import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../../lib/firebase/config";
import { styles } from "../../styles/login";
import { FormInput, Button } from "./FormElements";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log({ response });
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

  return (
    <View style={[styles.login, styles.flexCenter]}>
      <Text style={styles.header}>Login/Sign-Up</Text>
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
    </View>
  );
}
