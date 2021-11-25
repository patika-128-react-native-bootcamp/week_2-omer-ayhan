import React, { memo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./AddItem.style";

function AddItem({ priceItems, setPriceItems }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();

  const clearFields = () => {
    setTitle("");
    setPrice();
  };
  const handleSubmit = () => {
    const newItem = {
      id: Date.now().toFixed(3),
      title,
      price,
      timestamp: new Date().getTime(),
    };

    const isDuplicate = priceItems.find(
      (item) =>
        item.title.toUpperCase() === title.toUpperCase() &&
        item.price.toUpperCase() === price.toUpperCase() // find if there is any duplicate item
    );
    if (title && price && !isDuplicate) {
      if (!+price) {
        // checks if price input value is a number
        Alert.alert("Price has to be a number");
        return;
      }
      setPriceItems([...priceItems, newItem]);
      clearFields();
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.input_title}>Name</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      </View>

      <View>
        <Text style={styles.input_title}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(AddItem);
