import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import filterByType from "../../functions/filterByType";
import styles from "./FilterButton.style";

function FilterButton({
  title,
  filterType,
  setFilterType,
  setPriceItems,
  priceItems,
}) {
  const changeFilterType = () => {
    if (filterType !== title) {
      //   switch (title) {
      //     case "Asc. Price":
      //       setPriceItems(priceItems.sort((a, b) => a.price - b.price));
      //       break;
      //     case "Desc. Price":
      //       setPriceItems(priceItems.sort((a, b) => b.price - a.price));
      //       break;
      //     case "Date":
      //       setPriceItems(priceItems.sort((a, b) => b.timestamp - a.timestamp));
      //       break;
      //   }
      filterByType(title, priceItems, setPriceItems);
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
