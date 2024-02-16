import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { removePath, revertRmv } from "../../redux/reducers/pathSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ({
  icon: [action, icon],
  size = 30,
  setMenuOpen,
  setColorPickerOpen,
  colorPickerOpen,
  drawBehind,
  setDrawBehind,
  showLineThicknessSlider,
  setShowLineThicknessSlider,
}: any) {
  const [color, setColor] = useState("#dadada");
  const [activeAction, setActiveAction] = useState("");
  const dispatch = useDispatch();
  const navigation: NavigationProp = useNavigation();
  let rotate = 0;

  if (action === "undo" || action === "redo") rotate = 90;

  const handleHideSideBar = () => {
    setMenuOpen(false);
    setShowLineThicknessSlider(false);
  };

  const handleUndo = () => {
    dispatch(removePath(-1));
  };

  const handlePress = () => {
    if (action === "close") handleHideSideBar();
    if (action === "undo") handleUndo();
    if (action === "redo") dispatch(revertRmv());
    if (action === "clear") dispatch(removePath("all"));
    if (action === "color") setColorPickerOpen((prev: boolean) => !prev);
    if (action === "draw under") setDrawBehind((prev: boolean) => !prev);
    if (action === "user") navigation.navigate("Profile");
    if (action === "next") {
    }
    if (action === "thickness")
      setShowLineThicknessSlider((prev: boolean) => !prev);
    console.log("pressed " + action);
  };

  useEffect(() => {
    const boolSetters: { [key: string]: any } = {
      color: colorPickerOpen,
      "draw under": drawBehind,
      thickness: showLineThicknessSlider,
    };

    setColor(boolSetters[action] ? "#6b6b6b" : "#dadada");
  }, [colorPickerOpen, drawBehind, showLineThicknessSlider]);

  return (
    <Pressable onPress={handlePress}>
      <FontAwesomeIcon {...{ icon, color, size }} transform={{ rotate }} />
    </Pressable>
  );
}
