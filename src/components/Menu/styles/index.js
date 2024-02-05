import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContent: {
    position: "absolute",
    width: "86.5%",
    padding: 40,
  },
  colorContainer: {},
  color: { height: 50, width: 50, margin: 10, borderRadius: 50 },
  button: {
    borderBottomStyle: "solid",
    borderBottomWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 2.5,
    width: "100%",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  sliderContainer: {
    position: "relative",
    height: 100,
    justifyContent: "center",
  },
  sliderHandle: {
    position: "absolute",
    width: 20,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
    opacity: 0.5,
  },
  showPreviewStatusText: {
    textAlign: "right",
    marginHorizontal: 20,
  },
});
