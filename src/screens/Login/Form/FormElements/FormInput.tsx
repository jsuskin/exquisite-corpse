import React from "react";
import { TextInput } from "react-native";
import { styles } from "../../../../styles/login";
import { FormInput } from "../../../../types";

export default function ({
  placeholder,
  value,
  setState,
  props = {},
}: FormInput) {
  return (
    <TextInput
      {...{ placeholder, value, ...props }}
      onChangeText={setState}
      style={[styles.textInput, styles.formElement]}
    />
  );
}
