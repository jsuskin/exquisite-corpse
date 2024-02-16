import React, { useEffect, useRef } from "react";
import { Pressable, View, Dimensions, Animated, Easing } from "react-native";
import { styles } from "./styles/FAB";

export default function ({
  menuOpen,
  setMenuOpen,
  widgetOpen,
  setColorPickerOpen,
}: any) {
  // const anim = new Animated.Value(0);
  // const startAnimation = () => {
  //   Animated.timing(anim, {
  //     toValue: menuOpen ? Dimensions.get("window").width - 30 : 30,
  //     duration: 150,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // useEffect(startAnimation, [menuOpen]);

  return (
    <Pressable
      style={[styles.fab, { display: menuOpen ? "none" : "flex" }]}
      onPress={() => {
        setColorPickerOpen(false);
        setMenuOpen((prev: boolean) => !prev);
      }}
      hitSlop={40}
    >
      <View
        style={[
          styles.fabArm,
          ...["Left", "Right"].map((d) => ({ [`borderBottom${d}Radius`]: 10 })),
          {
            top: -2.3,
            transform: [{ rotateY: "-20deg" }, { rotateZ: "-20deg" }],
          },
        ]}
      />
      <View
        style={[
          styles.fabArm,
          ...["Left", "Right"].map((d) => ({ [`borderTop${d}Radius`]: 10 })),
          {
            bottom: -2.3,
            transform: [{ rotateY: "20deg" }, { rotateZ: "20deg" }],
          },
        ]}
      />
    </Pressable>
  );
}
