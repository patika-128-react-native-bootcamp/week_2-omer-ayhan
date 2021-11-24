import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import AddItem from "./Components/AddItem";
import FilterSection from "./Components/FilterSection";
import ItemList from "./Components/ItemList";

export default function App() {
  const [items, setItems] = React.useState([]);

  const [filterType, setFilterType] = React.useState("Date");

  const renderItems = ({ item }) => <ItemList item={item} />;
  const extractKey = ({ id }) => id.toString();

  useEffect(() => {
    let isMounted = true;
    console.log("useEffect: ", filterType);
    if (isMounted) {
      switch (filterType) {
        case "Desc":
          setItems(items.sort((a, b) => b.price - a.price));
          break;
        case "Asc":
          setItems(items.sort((a, b) => a.price - b.price));
          break;
        case "Date":
          setItems(items.sort((a, b) => b.timestamp - a.timestamp));
          break;
      }
    }
    return () => {
      isMounted = false;
    };
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <FilterSection
        filterType={filterType}
        setFilterType={setFilterType}
        items={items}
        setItems={setItems}
      />
      <View style={styles.list_container}>
        <FlatList
          keyExtractor={extractKey}
          data={items}
          renderItem={renderItems}
        />
      </View>
      <AddItem items={items} setItems={setItems} />
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
});
