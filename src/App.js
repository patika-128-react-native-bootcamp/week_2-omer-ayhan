import React from "react";
import { FlatList, SafeAreaView } from "react-native";
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
    <SafeAreaView>
      <FlatList
        keyExtractor={extractKey}
        data={items}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
}
