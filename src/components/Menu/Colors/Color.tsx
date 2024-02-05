import React from "react";
import { Pressable } from "react-native";
import { styles } from "../styles";

export const Color = ({ color, curSelected, setDrawColor }:any) => (
  <Pressable
    onPress={() => {
      console.log({ color });
      setDrawColor(color);
    }}
    style={[
      styles.color,
      {
        backgroundColor: color,
        borderWidth: color === curSelected ? 4 : 0,
        borderColor: color === curSelected ? "rgb(220, 152, 220)" : color,
      },
    ]}
  />
);
