import React, {useState,useEffect} from 'react';
import { styles } from '../../styles/global';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CanvasFrame from "../../components/CanvasFrame";
import FAB from "../../components/Menu/FAB";
import Menu from "../../components/Menu";
import Sidebar from "../../components/Sidebar";
import Preview from "../../components/Preview";
import Loading from "../../components/Loading";
import ColorPicker from "../../components/Menu/ColorPicker";
import { colors } from "../../util/constants";

export default function() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [drawColor, setDrawColor] = useState(colors[0]);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [curSquare, setCurSquare] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [drawBehind, setDrawBehind] = useState(false);

  const canvasProps = { curSquare, drawColor, strokeWidth, drawBehind };

  return (
    <View style={styles.container}>
          {showPreview ? (
            <Preview {...{ setShowPreview }} />
          ) : (
            <>
              {drawColor.length ? (
                <CanvasFrame {...canvasProps} />
              ) : (
                <Loading />
              )}
            </>
          )}
          <Sidebar
            {...{
              menuOpen,
              setMenuOpen,
              colorPickerOpen,
              setColorPickerOpen,
              drawBehind,
              setDrawBehind,
            }}
          />
          <FAB
            {...{
              menuOpen,
              widgetOpen: colorPickerOpen,
              setColorPickerOpen,
              setMenuOpen,
            }}
          />
          <ColorPicker
            {...{ menuOpen, colorPickerOpen, drawColor, setDrawColor }}
          />
          {/* <LineThicknessSlider
          trackStyle={{}}
          handleStyle={{}}
          panHandlers={{}}
        /> */}
          {/* <Menu {...menuProps} /> */}
        </View>
        
  )
}