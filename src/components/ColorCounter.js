import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// const ColorCounter = (props) => {
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  //using destructuring of props object
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
export default ColorCounter;
