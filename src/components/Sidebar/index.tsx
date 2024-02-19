import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Sidebar } from "../../types";
import { icons } from "../../util/constants";
import Icon from "./Icon";
import LineThicknessSlider from "./LineThicknessSlider";
import { styles } from "./styles";
import ColorPicker from "./ColorPicker";
import FAB from "../../components/Sidebar/FAB";
import { BoolSetter } from "../../types";
import { useDispatch } from "react-redux";

const boolSetter: BoolSetter = (prev: boolean) => !prev;

export default function ({
  menuOpen,
  setMenuOpen,
  drawColor,
  setDrawColor,
  colorPickerOpen,
  setColorPickerOpen,
  drawBehind,
  setDrawBehind,
  setStrokeWidth,
  showLineThicknessSlider,
  setShowLineThicknessSlider,
}: Sidebar) {
  const dispatch = useDispatch();
  
  return (
    <View style={[styles.sidebar, { right: menuOpen ? 0 : -80 }]}>
      <FAB
        {...{
          menuOpen,
          setColorPickerOpen,
          setMenuOpen,
        }}
      />
      {icons.map((icon, key) => (
        <View {...{ key }} style={styles.iconContainer}>
          <Icon
            {...{
              icon,
              hideSidebar: () => setMenuOpen(false),
              setColorPickerOpen,
              colorPickerOpen,
              drawBehind,
              setDrawBehind,
              showLineThicknessSlider,
              setShowLineThicknessSlider,
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
