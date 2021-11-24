const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#999",
  },
  text_item: {
    fontSize: 20,
    color: "#333",
  },
  text_price: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
