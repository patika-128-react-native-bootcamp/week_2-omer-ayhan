import React, { memo } from "react";
import { View, Text } from "react-native";
import styles from "./ItemList.style";

function ItemList({ priceItems }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text_item}>{priceItems.title}</Text>
      <Text style={styles.text_price}>{priceItems.price} TL</Text>
    </View>
  );
}
export default memo(ItemList);
