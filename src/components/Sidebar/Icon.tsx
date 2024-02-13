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
  size = 35,
  setMenuOpen = false,
  setColorPickerOpen,
  colorPickerOpen,
  drawBehind,
  setDrawBehind,
}: any) {
  const [color, setColor] = useState("#dadada");
  const [activeAction, setActiveAction] = useState("");
  const dispatch = useDispatch();
  const navigation: NavigationProp = useNavigation();
  let rotate = 0;

  if (action === "undo" || action === "redo") rotate = 90;

  const handlePress = () => {
    if (action === "close") setMenuOpen(false);
    if (action === "undo") dispatch(removePath(-1));
    if (action === "redo") dispatch(revertRmv());
    if (action === "clear") dispatch(removePath("all"));
    if (action === "color") setColorPickerOpen((prev: boolean) => !prev);
    if (action === "draw under") setDrawBehind((prev: boolean) => !prev);
    if(action === "user") navigation.navigate("Profile")
    console.log("pressed " + action);
  };

  useEffect(() => {
    if (action === "color") setColor(colorPickerOpen ? "#6b6b6b" : "#dadada");
  }, [colorPickerOpen]);

  useEffect(() => {
    if (action === "draw under") setColor(drawBehind ? "#6b6b6b" : "#dadada");
  }, [drawBehind]);

  return (
    <Pressable onPress={handlePress}>
      <FontAwesomeIcon {...{ icon, color, size }} transform={{ rotate }} />
    </Pressable>
  );
}
