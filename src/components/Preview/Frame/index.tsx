import React from "react";
import { Dimensions, View } from "react-native";
import Svg from "react-native-svg";
import { getPreviewBorder } from "../../../util/helper-methods";
import Path from "./Path";

export default function ({
  numFrames,
  index,
  item,
}: {
  numFrames: number;
  index: number;
  item: any;
}) {
  const screenDims = ["width", "height"].map(
    (d: string) => Dimensions.get("window")[d as "width" | "height"]
  );

  // DIMENSIONS APPLIED TO SVG ELEMENT
  const [width, height] = screenDims.map((d) => d / numFrames);

  return (
    <View
      style={[
        ...getPreviewBorder(index, numFrames - 1),
        { maxHeight: height * 0.895 },
      ]}
    >
      <Svg {...{ width, height }} viewBox={`0 0 ${screenDims.join(" ")}`}>
        {item.map(({ path, color, strokeWidth }: any, key: number) => (
          <Path {...{ key, strokeWidth, d: path, stroke: color }} />
        ))}
      </Svg>
    </View>
  );
}
