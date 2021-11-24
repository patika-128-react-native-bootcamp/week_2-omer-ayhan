import React from "react";
import { View } from "react-native";
import FilterButton from "./FilterButton";
import styles from "./FilterItems.style";

function FilterItems() {
  return (
    <View style={styles.container}>
      <FilterButton title="Asc. Price" />
      <FilterButton title="Desc. Price" />
      <FilterButton title="Date" />
    </View>
  );
}

export default FilterItems;
