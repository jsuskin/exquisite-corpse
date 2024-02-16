import React, { useState } from "react";
import { View } from "react-native";
import { Sidebar } from "../../types";
import { icons } from "../../util/constants";
import Icon from "./Icon";
import LineThicknessSlider from "./LineThicknessSlider";
import { styles } from "./styles";
import ColorPicker from "../../components/Menu/ColorPicker";
import FAB from "../../components/Sidebar/FAB";

export default function ({
  menuOpen,
  setStrokeWidth,
  colorPickerOpen,
  drawColor,
  setDrawColor,
  setColorPickerOpen,
  setMenuOpen,
  ...props
}: Sidebar) {
  const [showLineThicknessSlider, setShowLineThicknessSlider] = useState(false);

  return (
    <View style={[styles.sidebar, { right: menuOpen ? 0 : -80 }]}>
      <FAB
        {...{
          menuOpen,
          widgetOpen: colorPickerOpen,
          setColorPickerOpen,
          setMenuOpen,
        }}
      />
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
      <ColorPicker
        {...{ menuOpen, colorPickerOpen, drawColor, setDrawColor }}
      />
      <LineThicknessSlider
        show={showLineThicknessSlider}
        setStrokeWidth={setStrokeWidth}
      />
    </View>
  );
}
