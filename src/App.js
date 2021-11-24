import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import AddItem from "./Components/AddItem";
import ItemList from "./Components/ItemList";

export default function App() {
  const [items, setItems] = React.useState([
    {
      id: "#1312",
      title: "Çikolata",
      price: "2.50",
    },
    {
      id: "#1316",
      title: "Kola",
      price: "2.50",
    },
  ]);

  const renderItems = ({ item }) => <ItemList item={item} />;
  const extractKey = ({ id }) => id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list_container}>
        <FlatList
          keyExtractor={extractKey}
          data={items}
          renderItem={renderItems}
        />
      </View>
      <View style={styles.input_container}>
        <AddItem setItems={setItems} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_container: {
    flex: 1,
  },
  input_container: {
    flex: 0,
  },
});
