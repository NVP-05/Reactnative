import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Bai3() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Số đếm: {count}</Text>
      <View style={styles.buttons}>
        <Button title="Tăng" onPress={() => setCount(count + 1)} />
        <Button title="Giảm" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    gap: 20,
  },
});
