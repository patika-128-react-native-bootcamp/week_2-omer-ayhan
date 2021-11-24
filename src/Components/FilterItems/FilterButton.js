import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./FilterItems.style";

function FilterButton({ title }) {
  return (
    <Pressable style={[styles.filter_button]}>
      <Text style={[styles.button_text]}>{title}</Text>
    </Pressable>
  );
}
export default FilterButton;
