import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fab: {
    position: "relative",
    // alignSelf: "flex-end",
    top: 300,
    right: 50,
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
});
