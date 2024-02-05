import React from "react";
import { Text, Pressable, Dimensions } from "react-native";

interface BtnText {
  text?: "Hide Preview" | "☒";
  fontSize?: 25 | 30;
  fontWeight?: "500" | "600";
  letterSpacing?: 0 | 1.5;
}

export default function ({ onPress }: any) {
  return (
    <Pressable
      {...{ onPress }}
      style={{
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.0515,
        backgroundColor: "#cd3a4a",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <BtnText text='☒' fontSize={30} fontWeight='600' letterSpacing={0} />
      <BtnText />
      <BtnText text='☒' fontSize={30} fontWeight='600' letterSpacing={0} />
    </Pressable>
  );
}

const BtnText = ({
  text = "Hide Preview",
  fontSize = 25,
  fontWeight = "500",
  letterSpacing = 1.5,
}: BtnText) => (
  <Text
    style={{
      color: "#ddddaa",
      fontSize,
      fontWeight,
      letterSpacing,
    }}
  >
    {text}
  </Text>
);
