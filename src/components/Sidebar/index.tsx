import React from "react";
import { View } from "react-native";
import { Sidebar } from "../../types";
import { icons } from "../../util/constants";
import Icon from "./Icon";
import { styles } from "./styles";

export default function ({ menuOpen, ...props }: Sidebar) {
  return (
    <View style={[styles.sidebar, { right: menuOpen ? 0 : -80 }]}>
      {icons.map((icon, key) => (
        <View {...{ key }} style={styles.iconContainer}>
          <Icon {...{ icon, ...props }} />
        </View>
      ))}
    </View>
  );
}
