import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./AddItem.style";

function AddItem({ items, setItems }) {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = () => {
    const newItem = { id: Date.now(), title, price };

    const isDuplicate = items.find(
      (item) => item.title === title && item.price === price
    );
    if (title && price && !isDuplicate) {
      // add item without duplicates
      setItems([...items, newItem]);
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

export default AddItem;
