import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "./../components/ColorCounter";

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    //color === 'red, green blue
    // change === +15 or -15
    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else setRed(red + change);
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_DECREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_DECREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};
export default SquareScreen;
