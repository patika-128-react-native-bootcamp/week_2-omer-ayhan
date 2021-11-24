import React, { memo } from "react";
import { Pressable, Text } from "react-native";
import styles from "./FilterSection.style";

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
    <Pressable
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
    </Pressable>
  );
}
export default memo(FilterButton);
