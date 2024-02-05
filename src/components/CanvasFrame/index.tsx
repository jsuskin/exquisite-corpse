import React, { useEffect, useRef, useMemo, useState } from "react";
import { PanResponder, Dimensions, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { addPath } from "../../redux/reducers/pathSlice";
import { styles } from "./styles";

export default function ({
  curSquare = -1,
  numSquares = 1,
  drawColor = "black",
  strokeWidth = 0.5,
  drawBehind = false,
}) {
  const dispatch = useDispatch();
  const paths = useSelector((state: any) =>
    state.path.paths?.slice(curSquare, curSquare + 1).pop()
  );

  const [currentPath, setCurrentPath] = useState({
    path: "",
    color: "",
    strokeWidth: 0.5,
  });

  const path = useRef("");
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (_, gesture) => {
          const { x0, y0 } = gesture;
          path.current = `M${x0},${y0}`;
        },
        onPanResponderMove: (_, gesture) => {
          const { moveX, moveY } = gesture;
          const curPath = `${path.current} L${moveX},${moveY}`;
          path.current = curPath;
          setCurrentPath((prevPath) => ({
            ...prevPath,
            path: prevPath.path + curPath,
          }));
        },
        onPanResponderRelease: () => {
          const newPathObj = {
            path: path.current,
            color: drawColor,
            strokeWidth,
          };

          dispatch(addPath([newPathObj, drawBehind]));
          setCurrentPath({ ...newPathObj, path: "" });
        },
      }),
    [drawColor, strokeWidth, drawBehind]
  );

  useEffect(() => {
    setCurrentPath((path) => ({ ...path, color: drawColor, strokeWidth }));
  }, [drawColor, strokeWidth]);

  return (
    <View
      style={[
        styles.container,
        { height: Dimensions.get("window").height * (0.95 / numSquares) },
      ]}
      {...panResponder.panHandlers}
    >
      <Svg height='100%' width='100%'>
        {[drawBehind && currentPath, ...paths, !drawBehind && currentPath].map(
          ({ path: d, color: stroke, strokeWidth }, key) => (
            <Path {...{ key, strokeWidth, stroke, d }} fill='none' />
          )
        )}
      </Svg>
      <View style={styles.divider} />
    </View>
  );
}
