import React from "react";
import { icons } from "../../util/constants";
import Icon from "./Icon";
import { Pressable, StyleSheet, View } from "react-native";

export default function ({ menuOpen, setMenuOpen, colorPickerOpen, setColorPickerOpen, drawBehind, setDrawBehind }: any) {
  return (
    <View style={[styles.sidebar, { right: menuOpen ? 0 : -80 }]}>
      {icons.map((icon, key) => (
        <View {...{ key }} style={styles.iconContainer}>
          <Icon
            {...{
              icon,
              setMenuOpen,
              colorPickerOpen,
              setColorPickerOpen,
              drawBehind,
              setDrawBehind,
            }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: { position: "absolute", margin: 5, top: 25 },
  iconContainer: { margin: 15 },
});
