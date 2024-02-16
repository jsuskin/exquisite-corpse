import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sidebar: { position: "absolute", padding: 10, top: 70 },
  iconContainer: { margin: 10 },
  slider: {
    position: "absolute",
    width: 250,
    left: -180,
    bottom: 270,
    transform: [{ rotate: "90deg" }, { scale: -2 }],
  },
});
