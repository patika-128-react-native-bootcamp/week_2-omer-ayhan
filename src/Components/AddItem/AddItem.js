import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./AddItem.style";

function AddItem({ setItems }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.input_title}>Name</Text>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text style={styles.input_title}>Price</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddItem;
