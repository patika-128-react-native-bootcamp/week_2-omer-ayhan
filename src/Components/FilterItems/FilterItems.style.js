import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  filter_button: {
    width: 105,
    height: 35,
    backgroundColor: "#cdd1d1e3",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#38444a",
  },
  button_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#38444a",
  },
  button_touch: {
    backgroundColor: "#38444a",
  },
  button_text_touch: {
    color: "#fff",
  },
});

export default styles;
