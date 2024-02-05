import React from "react";
import { View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

export default function ({ drawColor, setDrawColor }: any) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ColorPicker
        color={drawColor}
        onColorChange={() => console.log("color change in progress")}
        onColorChangeComplete={setDrawColor}
        thumbSize={20}
        sliderSize={20}
        noSnap={true}
        row={true}
        useNativeDriver={false}
        useNativeLayout={false}
        swatches={true}
        swatchesLast={false}
        discrete={false}
      />
    </View>
  );
}
