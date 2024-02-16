import React, { useState } from "react";
import { View } from "react-native";
import { Sidebar } from "../../types";
import { icons } from "../../util/constants";
import Icon from "./Icon";
import LineThicknessSlider from "./LineThicknessSlider";
import { styles } from "./styles";

export default function ({ menuOpen, setStrokeWidth, ...props }: Sidebar) {
  const [showLineThicknessSlider, setShowLineThicknessSlider] = useState(false);

  return (
    <View style={[styles.sidebar, { right: menuOpen ? 0 : -80 }]}>
      {icons.map((icon, key) => (
        <View {...{ key }} style={styles.iconContainer}>
          <Icon
            {...{
              icon,
              showLineThicknessSlider,
              setShowLineThicknessSlider,
              ...props,
            }}
          />
        </View>
      ))}
      <LineThicknessSlider show={showLineThicknessSlider} setStrokeWidth={setStrokeWidth}/>
    </View>
  );
}
