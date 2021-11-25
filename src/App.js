import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import AddItem from "./Components/AddItem";
import FilterButton from "./Components/FilterButton";
import ItemList from "./Components/ItemList";
import filterByType from "./functions/filterByType";

export default function App() {
  const [priceItems, setPriceItems] = React.useState([]); // state of our price list items which keeps items as an object array

  const [filterType, setFilterType] = React.useState("Date"); // state of our filter type which keeps the type of filter to decide which sorting function to use

  const renderItems = ({ item }) => <ItemList priceItems={item} />; // function to render our items in FlatList component
  const extractKey = ({ id }) => id.toString(); // function to extract the key of each item in FlatList component for unique identification
  const itemSeperator = () => <View style={styles.seperator} />; // function to render a seperator between each item in FlatList component

  useEffect(() => {
    let isMounted = true; // variable to handle component unmounting
    if (isMounted) {
      // switch (filterType) {
      //   case "Desc":
      //     setItems(items.sort((a, b) => b.price - a.price));
      //     break;
      //   case "Asc":
      //     setItems(items.sort((a, b) => a.price - b.price));
      //     break;
      //   case "Date":
      //     setItems(items.sort((a, b) => b.timestamp - a.timestamp));
      //     break;
      // }
      filterByType(filterType, priceItems, setPriceItems); // calling function to decide which sort function to use
    }
    return () => {
      isMounted = false; // unmounting component
    };
  }, [priceItems]); // calling useEffect each time a new item is added to the list

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filter_container}>
        <FilterButton
          priceItems={priceItems}
          setPriceItems={setPriceItems}
          filterType={filterType}
          setFilterType={setFilterType}
          title="Asc. Price"
        />
        <FilterButton
          priceItems={priceItems}
          setPriceItems={setPriceItems}
          filterType={filterType}
          setFilterType={setFilterType}
          title="Desc. Price"
        />
        <FilterButton
          priceItems={priceItems}
          setPriceItems={setPriceItems}
          filterType={filterType}
          setFilterType={setFilterType}
          title="Date"
        />
      </View>
      <View style={styles.list_container}>
        <FlatList
          keyExtractor={extractKey}
          data={priceItems}
          renderItem={renderItems}
          ItemSeparatorComponent={itemSeperator}
        />
      </View>
      <AddItem priceItems={priceItems} setPriceItems={setPriceItems} />
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
