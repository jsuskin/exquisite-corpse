import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  divider: {
    width: "100%",
    height: 1,
    borderStyle: "dashed",
    borderColor: "#dadada",
    borderTopWidth: 4,
    bottom: Dimensions.get("window").height * 0.06,
  },
});
