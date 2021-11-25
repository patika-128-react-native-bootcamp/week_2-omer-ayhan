import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import AddItem from "./Components/AddItem";
import FilterButton from "./Components/FilterButton";
import ItemList from "./Components/ItemList";

export default function App() {
  const [items, setItems] = React.useState([]);

  const [filterType, setFilterType] = React.useState("Date");

  const renderItems = ({ item }) => <ItemList item={item} />;
  const extractKey = ({ id }) => id.toString();
  const itemSeperator = () => <View style={styles.seperator} />;

  useEffect(() => {
    let isMounted = true;
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
      <View style={styles.filter_container}>
        <FilterButton
          items={items}
          setItems={setItems}
          filterType={filterType}
          setFilterType={setFilterType}
          title="Asc"
        />
        <FilterButton
          items={items}
          setItems={setItems}
          filterType={filterType}
          setFilterType={setFilterType}
          title="Desc"
        />
        <FilterButton
          items={items}
          setItems={setItems}
          filterType={filterType}
          setFilterType={setFilterType}
          title="Date"
        />
      </View>
      <View style={styles.list_container}>
        <FlatList
          keyExtractor={extractKey}
          data={items}
          renderItem={renderItems}
          ItemSeparatorComponent={itemSeperator}
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
  seperator: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  filter_container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  list_container: {
    flex: 1,
  },
});
