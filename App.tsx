import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import CanvasFrame from "./src/components/CanvasFrame";
import FAB from "./src/components/Menu/FAB";
import Menu from "./src/components/Menu";
import Preview from "./src/components/Preview";
import { colors } from "./src/util/constants";
import Loading from "./src/components/Loading";
import { styles } from "./src/styles/global";
// import Auth from './src/components/Auth';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawColor, setDrawColor] = useState(colors[0]);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [curSquare, setCurSquare] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [drawBehind, setDrawBehind] = useState(false);

  const canvasProps = { curSquare, drawColor, strokeWidth, drawBehind };

  const menuProps = {
    ...{ menuOpen, setMenuOpen },
    ...{ drawColor, setDrawColor },
    ...{ strokeWidth, setStrokeWidth },
    ...{ showPreview, setShowPreview },
    ...{ drawBehind, setDrawBehind },
    setCurSquare,
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {showPreview ? (
          <Preview {...{ setShowPreview }} />
        ) : (
          <>
            {drawColor.length ? <CanvasFrame {...canvasProps} /> : <Loading />}
          </>
        )}
        <FAB {...{ menuOpen, setMenuOpen }} />
        <Menu {...menuProps} />
      </View>
      <StatusBar style='auto' hidden={true} />
    </Provider>
  );
}
