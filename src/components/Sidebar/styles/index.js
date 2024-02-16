import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fab: {
    position: "relative",
    alignSelf: "flex-end",
    zIndex: 999,
  },
  fabArm: {
    position: "absolute",
    width: 10,
    height: 30,
    backgroundColor: "rgba(225,225,225,1)",
    zIndex: 5,
    // ...border()
  },
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
