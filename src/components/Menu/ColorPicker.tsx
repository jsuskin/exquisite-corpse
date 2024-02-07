import React from "react";
import { View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

export default function ({
  menuOpen,
  colorPickerOpen,
  drawColor,
  setDrawColor,
}: any) {
  return (
    <View
      style={{
        position: "absolute",
        height: 285,
        width: 275,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ translateX: menuOpen && colorPickerOpen ? 0 : 400 }],
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ColorPicker
          color={drawColor}
          onColorChange={() => console.log("color change in progress")}
          onColorChangeComplete={setDrawColor}
          thumbSize={20}
          sliderSize={20}
          noSnap
          row
          swatches={false}
          useNativeDriver={false}
          useNativeLayout={false}
          discrete={false}
        />
      </View>
    </View>
  );
}
