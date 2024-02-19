import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { Alert, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { removePath, revertRmv } from "../../redux/reducers/pathSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, BoolSetter } from "../../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type IconActions = { [key: string]: () => void };

const boolSetter: BoolSetter = (prev: boolean) => !prev;

export default function ({
  icon: [action, icon],
  size = 30,
  hideSidebar,
  setColorPickerOpen,
  colorPickerOpen,
  drawBehind,
  setDrawBehind,
  showLineThicknessSlider,
  setShowLineThicknessSlider,
}: any) {
  const [color, setColor] = useState("#dadada");
  const dispatch = useDispatch();
  const navigation: NavigationProp = useNavigation();
  let rotate = 0;

  if (action === "undo" || action === "redo") rotate = 90;

  const clearCanvasFrame = () => {
    Alert.alert(
      "Clear Canvas Frame",
      "Do you want to start this frame over?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Clear Canvas Frame"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Clear Canvas Frame");
            dispatch(removePath("all"));
          },
        },
      ]
    );
  };

  const iconActions: IconActions = {
    close: hideSidebar,
    undo: () => {
      dispatch(removePath(-1));
    },
    redo: () => {
      dispatch(revertRmv());
    },
    clear: clearCanvasFrame,
    thickness: () => {
      setShowLineThicknessSlider(boolSetter);
    },
    color: () => {
      setColorPickerOpen(boolSetter);
    },
    "draw under": () => {
      setDrawBehind(boolSetter);
    },
    user: () => {
      navigation.navigate("Profile");
    },
    next: () => {},
  };

  const handlePress = () => {
    iconActions[action]();
    console.log("pressed " + action);
  };

  const setIconColor = () => {
    const iconActiveStates: { [key: string]: boolean } = {
      color: colorPickerOpen,
      "draw under": drawBehind,
      thickness: showLineThicknessSlider,
    };

    setColor(iconActiveStates[action] ? "#6b6b6b" : "#dadada");
  };

  useEffect(setIconColor, [
    colorPickerOpen,
    drawBehind,
    showLineThicknessSlider,
  ]);

  return (
    <Pressable onPress={handlePress}>
      <FontAwesomeIcon {...{ icon, color, size }} transform={{ rotate }} />
    </Pressable>
  );
}
