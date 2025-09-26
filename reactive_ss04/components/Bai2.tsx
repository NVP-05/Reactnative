import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.symbol}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.symbol}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4FAFD",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  symbol: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});
