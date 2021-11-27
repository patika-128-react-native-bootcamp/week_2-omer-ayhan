import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import filterByType from "../../functions/filterByType";
import styles from "./FilterButton.style";

function FilterButton({
  title = "Button",
  filterType = "Date",
  setFilterType,
  setPriceItems,
  priceItems,
}) {
  const changeFilterType = () => {
    if (filterType !== title) {
      // checking if the filter type is not the same as the title, for preventing the function from running unnecessarily
      filterByType(title, priceItems, setPriceItems);
      setFilterType(title); // setting title as the filter type
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.filter_button,
        filterType === title && styles.button_touch, // if title is the same as the filter type, then apply given styles
      ]}
      onPress={changeFilterType}>
      <Text
        style={[
          styles.button_text,
          filterType === title && styles.button_text_touch, // if title is the same as the filter type, then apply given styles
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default memo(FilterButton);
