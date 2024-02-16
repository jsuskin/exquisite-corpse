import React, { useState } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import { styles } from "./styles";
import { LineThicknessSlider, SliderThumb } from "../../redux/types";

export default function ({ show, setStrokeWidth }: LineThicknessSlider) {
  const [lineThickness, setLineThickness] = useState(0.1);
  const progress = useSharedValue(0.1);
  const min = useSharedValue(0.1);
  const max = useSharedValue(20);

  return (
    <View>
      <Slider
        theme={{
          maximumTrackTintColor: "#dadada",
          minimumTrackTintColor: "#6b6b6b",
          bubbleBackgroundColor: "#dadada",
        }}
        style={[styles.slider, { display: show ? "flex" : "none" }]}
        renderThumb={() => {
          return (
            <Thumb
              {...["width", "height"].reduce(
                (acc, cur) => ({
                  ...acc,
                  [cur]: 15 + Math.sqrt(lineThickness * 9),
                }),
                { width: 0, height: 0 }
              )}
            />
          );
        }}
        containerStyle={{ borderRadius: 30 }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={15 + Math.sqrt(lineThickness * 9)}
        bubbleContainerStyle={{
          transform: [{ rotate: "90deg" }, { translateX: -25 }],
        }}
        sliderHeight={Math.max(0.5, lineThickness)}
        bubble={(num) => {
          return num.toPrecision(3).toString();
        }}
        onValueChange={(num) => {
          setLineThickness(num);
        }}
        onSlidingComplete={(num) => {
          console.log({ num });
          setStrokeWidth(lineThickness);
        }}
      />
    </View>
  );
}

const Thumb = ({ width, height }: SliderThumb) => (
  <View
    style={{
      width,
      height,
      backgroundColor: "red",
      borderRadius: 50,
    }}
  />
);
