import React from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./styles";

export const Button = ({ text, onPress, disabled = false }: any) => {
  const color = disabled ? "#cbcbcb" : "#000000";

  return (
    <Pressable
      {...{ onPress, disabled }}
      style={{ ...styles.button, borderBottomColor: color }}
    >
      <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </Pressable>
  );
};
