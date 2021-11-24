import React, { memo } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./AddItem.style";

function AddItem({ items, setItems }) {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const clearFields = () => {
    setTitle("");
    setPrice("");
  };
  const handleSubmit = () => {
    const newItem = {
      id: Date.now().toFixed(3),
      title,
      price,
      timestamp: new Date().getTime(),
    };

    const isDuplicate = items.find(
      (item) => item.title === title && item.price === price // find if there is any duplicate item
    );
    if (title && price && !isDuplicate) {
      setItems([...items, newItem]);
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
      <TouchableOpacity
        style={[styles.button, { marginTop: 15 }]}
        onPress={() => setItems([])}>
        {/* Test Button */}
        <Text style={styles.button_text}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(AddItem);
