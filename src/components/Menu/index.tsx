import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  PanResponder,
  BackHandler,
} from "react-native";

import { styles } from "./styles";
import { styles as globalStyles } from "../../styles/global";

import Colors from "./Colors";
import { useSelector } from "react-redux";
import ColorPicker from "../Sidebar/ColorPicker";
import LineThicknessSlider from "./LineThicknessSlider";
import MenuButtons from "./MenuButtons";

export default function ({
  menuOpen,
  setMenuOpen,
  drawColor,
  setDrawColor,
  strokeWidth,
  setStrokeWidth,
  setCurSquare,
  showPreview,
  setShowPreview,
  setDrawBehind,
  drawBehind,
}: any) {
  const [sliderPosition, setSliderPosition] = useState(0);

  const [paths, bottomPaths] = ["paths", "bottomPaths"].map((key) =>
    useSelector((state: any) => state.path[key]?.slice(-1).pop())
  );

  const handleSliderMove = (e: any, gestureState: any) => {
    const newPosition = sliderPosition + gestureState.dx;
    if (newPosition < 0 || newPosition > 175) return;
    const cur = Math.floor(Math.max(0, newPosition - 10) / 10);
    setStrokeWidth(cur ? cur + 1 : 0.5);
    setSliderPosition(newPosition);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handleSliderMove,
    onPanResponderRelease: (e, gestureState) => {
      const cur = Math.floor(Math.max(0, sliderPosition - 10) / 10);
      setStrokeWidth(cur ? cur + 1 : 0.5);
    },
  });

  useEffect(() => {
    const backAction = () => {
      if (menuOpen) {
        // If the menu is currently shown, hide it
        setMenuOpen(false);
        return true; // Indicate that back action is handled
      } else {
        // If the menu is not shown, perform default back action
        return false; // Let the default back action take place
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [menuOpen]);

  const sliderStyles = {
    track: {
      height: strokeWidth,
      backgroundColor: drawColor,
    },
    handle: [
      styles.sliderHandle,
      {
        backgroundColor: "#" + [...drawColor].slice(1).reverse().join(""),
        transform: [{ translateX: sliderPosition }],
      },
    ],
  };

  return (
    <View
      style={[
        styles.menu,
        { right: menuOpen ? 0 : Dimensions.get("window").width },
      ]}
    >
      <View style={styles.menuContent}>
        <LineThicknessSlider
          trackStyle={sliderStyles.track}
          handleStyle={sliderStyles.handle}
          panHandlers={panResponder.panHandlers}
        />
        <ColorPicker {...{ drawColor, setDrawColor }} />
        <MenuButtons
          disabled={!paths.length}
          {...{
            setMenuOpen,
            setCurSquare,
            showPreview,
            setShowPreview,
            setDrawBehind,
            drawBehind,
          }}
        />
      </View>
    </View>
  );
}
