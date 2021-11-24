import React, { memo } from "react";
import { View } from "react-native";
import FilterButton from "./FilterButton";
import styles from "./FilterItems.style";

function FilterItems({ filterType, setFilterType, setItems, items }) {
  return (
    <View style={styles.container}>
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
  );
}

export default memo(FilterItems);
