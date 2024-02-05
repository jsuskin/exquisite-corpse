import React, { useRef } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export default function ({ trackStyle, handleStyle, panHandlers }:any) {
  const sliderHandleRef = useRef(null);
  return (
    <View style={styles.sliderContainer}>
      <View style={trackStyle} />
      <View ref={sliderHandleRef} style={handleStyle} {...panHandlers} />
    </View>
  );
}
