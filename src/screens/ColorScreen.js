import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  //   const [colors, setColors] = useState(0, 0, 0); // This is also working
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a color."
        onPress={() => {
          //   setColor = "rgb(255,255,255)";
          //   setColors(randomRgb());  // This is also working
          setColors([...colors, randomRgb()]);
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View>
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  console.log(`I am here`);
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  console.log(`rgb(${red},${green},${blue},)`);
  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({});
export default ColorScreen;
