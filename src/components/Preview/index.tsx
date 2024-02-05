import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
// import HidePreviewButton from "./HidePreviewButton";
import Frame from "./Frame";

export default function ({ setShowPreview }: any) {
  const allFrames = useSelector((state: any) => state.path.paths);
  const numFrames = allFrames.length;

  return (
    <>
      <View style={{ position: "absolute" }}>
        <FlatList
          data={allFrames}
          renderItem={({ item, index }) => (
            <Frame {...{ item, index, numFrames }} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      {/* <HidePreviewButton onPress={() => setShowPreview(false)} /> */}
    </>
  );
}
