import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai10() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const changeColor = (color: "red" | "green" | "blue", amount: number) => {
    if (color === "red") setRed(Math.min(255, Math.max(0, red + amount)));
    if (color === "green") setGreen(Math.min(255, Math.max(0, green + amount)));
    if (color === "blue") setBlue(Math.min(255, Math.max(0, blue + amount)));
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.preview,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      />
      <View style={styles.row}>
        <Text style={styles.label}>Red: {red}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor("red", -15)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor("red", 15)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Green: {green}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor("green", -15)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor("green", 15)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Blue: {blue}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor("blue", -15)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeColor("blue", 15)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  preview: {
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 18,
    flex: 1,
  },
  button: {
    width: 50,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
