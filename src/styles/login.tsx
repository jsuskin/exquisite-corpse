import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: { fontSize: 32 },
  form: { marginVertical: 50 },
  formElement: {
    minWidth: "80%",
    marginVertical: 10,
    borderRadius: 10,
  },
  textInput: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderColor: "#11b0dd",
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "#11b0ddc0",
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: "#3d3d3d",
  },
  login: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
});
