import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./FilterButton.style";

function FilterButton({ title, filterType, setFilterType, setItems, items }) {
  const changeFilterType = () => {
    if (!(filterType === title)) {
      switch (title) {
        case "Asc":
          setItems(items.sort((a, b) => a.price - b.price));
          break;
        case "Desc":
          setItems(items.sort((a, b) => b.price - a.price));
          break;
        case "Date":
          setItems(items.sort((a, b) => b.timestamp - a.timestamp));
          break;
      }
      setFilterType(title);
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.filter_button,
        filterType === title && styles.button_touch,
      ]}
      onPress={changeFilterType}>
      <Text
        style={[
          styles.button_text,
          filterType === title && styles.button_text_touch,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default memo(FilterButton);
