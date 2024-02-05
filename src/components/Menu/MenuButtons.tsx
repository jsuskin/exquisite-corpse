import React from "react";
import { FlatList, Text } from "react-native";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { removePath, startNewSquare } from "../../redux/reducers/pathSlice";
import { styles } from "./styles";

export default function ({
  disabled,
  setCurSquare,
  showPreview,
  setShowPreview,
  setMenuOpen,
  drawBehind,
  setDrawBehind,
}: any) {
  const dispatch = useDispatch();

  // BUTTON HANDLER UTIL
  const handleAndCloseMenu = (fn: any) => fn() && setMenuOpen(false);
  const handleRemovePath = (p: any) =>
    handleAndCloseMenu(() => dispatch(removePath(p)));

  // BUTTON HANDLERS
  const handleUndoDraw = () => handleRemovePath(-1);
  const handleRemoveAllPaths = () => handleRemovePath("all");
  const handleFinishTurn = () => {
    handleAndCloseMenu(() => dispatch(startNewSquare()));
    setCurSquare((prev: any) => prev + 1);
  };
  const handleSetShowPreview = () => {
    handleAndCloseMenu(() => {
      setShowPreview((prev: any) => !prev);
      return true;
    });
  };
  const handleSetDrawBehind = () => {
    setDrawBehind((prev: any) => !prev);
  };

  const menuButtons = [
    ["Undo", handleUndoDraw],
    ["Clear", handleRemoveAllPaths],
    ["Finish Turn", handleFinishTurn],
    [
      "Preview",
      handleSetShowPreview,
      <Text style={styles.showPreviewStatusText}>
        Preview is {["Off", "On"][+showPreview]}
      </Text>,
    ],
    [
      "Draw Under",
      handleSetDrawBehind,
      <Text style={styles.showPreviewStatusText}>
        Draw Under is {["Off", "On"][+drawBehind]}
      </Text>,
    ],
  ];

  return (
    <FlatList
      renderItem={({ item: [text, onPress, cmp] }) => (
        <>
          <Button {...{ text, onPress, disabled }} />
          {cmp}
        </>
      )}
      data={menuButtons}
      keyExtractor={(item) => item.toString()}
    />
  );
}
