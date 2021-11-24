import React, { memo } from "react";
import { View, Text } from "react-native";
import styles from "./ItemList.style";

function ItemList({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text_item}>{item.title}</Text>
      <Text style={styles.text_price}>{item.price} TL</Text>
    </View>
  );
}
export default memo(ItemList);
