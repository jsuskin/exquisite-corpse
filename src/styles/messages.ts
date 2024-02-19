import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: { fontSize: 22 },
  messages: {
    width: "95%",
    height: "100%",
  },
  message: {
    paddingHorizontal: 10,
    marginVertical: 2,
    paddingVertical: 10,
    borderColor: "#d6d6d6",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: 4,
  },
  senderInfo: { flexDirection: "row" },
  boldText: { fontWeight: "600" },
});