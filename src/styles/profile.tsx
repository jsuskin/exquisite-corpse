import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profile: {
    position: "relative",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: { position: "absolute", top: 0, right: 0, margin: 20 },
  profileSettingsButton: {

  },
  signOutButton: {
    alignItems: "center",
    backgroundColor: "#11b0dd",
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
  signOutButtonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});
