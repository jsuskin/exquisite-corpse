import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CanvasFrame from "../components/CanvasFrame";
import Loading from "../components/Loading";
import Preview from "../components/Preview";
import Sidebar from "../components/Sidebar";
import { styles } from "../styles/global";
import { colors } from "../util/constants";

export default function () {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [drawColor, setDrawColor] = useState(colors[0]);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [curSquare, setCurSquare] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [drawBehind, setDrawBehind] = useState(false);
  const [showLineThicknessSlider, setShowLineThicknessSlider] = useState(false);

  const canvasProps = {
    curSquare,
    drawColor,
    strokeWidth,
    drawBehind,
    setColorPickerOpen,
    setShowLineThicknessSlider,
  };

  useEffect(() => {
    if (!menuOpen) {
      setShowLineThicknessSlider(false);
      setColorPickerOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (showLineThicknessSlider) setColorPickerOpen(false);
  }, [showLineThicknessSlider]);

  useEffect(() => {
    if (colorPickerOpen) setShowLineThicknessSlider(false);
  }, [colorPickerOpen]);

  return (
    <View style={styles.container}>
      {showPreview ? (
        <Preview {...{ setShowPreview }} />
      ) : (
        <>{drawColor.length ? <CanvasFrame {...canvasProps} /> : <Loading />}</>
      )}
      <Sidebar
        {...{
          menuOpen,
          setMenuOpen,
          colorPickerOpen,
          setColorPickerOpen,
          drawBehind,
          setDrawBehind,
          setStrokeWidth,
          drawColor,
          setDrawColor,
          showLineThicknessSlider,
          setShowLineThicknessSlider,
        }}
      />
    </View>
  );
}
