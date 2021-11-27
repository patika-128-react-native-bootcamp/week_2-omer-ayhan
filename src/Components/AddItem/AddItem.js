import React, { memo, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./AddItem.style";

function AddItem({ priceItems, setPriceItems }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const titleRef = useRef(null);
  const priceRef = useRef(null);

  const clearFields = () => {
    // clear all fields when this function is called
    titleRef.current.clear();
    priceRef.current.clear();
  };
  const handleSubmit = () => {
    const newItem = {
      id: Date.now().toFixed(3),
      title,
      price,
      timestamp: new Date().getTime(),
    };

    // find if there is any duplicate item
    const isDuplicate = priceItems.find(
      (item) =>
        item.title.toUpperCase() === title.toUpperCase() &&
        item.price.toUpperCase() === price.toUpperCase()
    );
    if (title && price && !isDuplicate) {
      if (!+price) {
        // checks if price input value is a number
        Alert.alert("Price has to be a number");
        return;
      }
      setPriceItems([...priceItems, newItem]); // add new item to the list while keeping the original list
      clearFields();
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.input_title}>Name</Text>
        <TextInput
          ref={titleRef}
          style={styles.input}
          onChangeText={setTitle}
        />
      </View>

      <View>
        <Text style={styles.input_title}>Price</Text>
        <TextInput
          ref={priceRef}
          style={styles.input}
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
