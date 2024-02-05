import React, { useRef, useEffect } from "react";
import { Animated, Easing, View } from "react-native";

export default function () {
  const rotationXValue = useRef(new Animated.Value(0)).current;
  const rotationYValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateX = () => {
      Animated.loop(
        Animated.timing(rotationXValue, {
          toValue: 1,
          duration: 2000, // Adjust the duration as needed
          useNativeDriver: true,
          easing: Easing.linear,
        })
      ).start();
    };

    rotateX();

    // Clean up the animation when component unmounts
    return () => {
      rotationXValue.setValue(0); // Reset the value
    };
  }, [rotationXValue]);

  useEffect(() => {
    const rotateY = () => {
      Animated.loop(
        Animated.timing(rotationYValue, {
          toValue: 1,
          duration: 616, // Adjust the duration as needed
          useNativeDriver: true,
          easing: Easing.linear,
        })
      ).start();
    };

    rotateY();

    // Clean up the animation when component unmounts
    return () => {
      rotationYValue.setValue(0); // Reset the value
    };
  }, [rotationYValue]);

  const rotateXInterpolate = rotationXValue.interpolate({
    inputRange: [0.2, 0.5],
    outputRange: ["360deg", "0deg"],
  });

  const rotateYInterpolate = rotationYValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        backgroundColor: "#894328",
        width: 80,
        height: 80,
        borderRadius: 50,
        // borderBottomWidth: 20,
        transform: [
          { rotateX: rotateXInterpolate },
          { rotateY: rotateYInterpolate },
        ],
      }}
    ></Animated.View>
  );
}
