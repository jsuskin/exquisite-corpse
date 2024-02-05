import { FlatList } from "react-native";
import { Color } from "./Color";
import React from "react";
import { colors } from "../../../util/constants";

export default function ({ drawColor, setDrawColor }:any) {
  return (
    <FlatList
      renderItem={({ item: color }) => (
        <Color {...{ color, setDrawColor }} curSelected={drawColor} />
      )}
      data={colors}
      keyExtractor={(item) => item.toString()}
      numColumns={3}
    />
  );
}
