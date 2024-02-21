import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../../styles/login";
import { Button } from "../../../types";

export default function ({ handlePress, text, disabled = false }: Button) {
  return (
    <Pressable
      onPress={handlePress}
      style={[styles.button, styles.formElement, styles.flexCenter]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}
