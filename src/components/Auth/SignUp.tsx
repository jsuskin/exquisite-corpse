import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = async () => {};

  return (
    <View
      style={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
        width: "80%",
        height: 400,
        borderColor: "#dd11aa",
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: 20,
      }}
    >
      <Text style={{fontSize: 32}}>Sign Up</Text>
      <View style={{marginVertical:20}}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.textInput}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
          style={styles.textInput}
        />
        <Button title='Submit' onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    minWidth: "80%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderColor: "#11b0dd",
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderRadius: 10,
  },
});