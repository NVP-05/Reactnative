import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai9() {
  const [light, setLight] = useState<"red" | "yellow" | "green">("red");

  const changeLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          { backgroundColor: "red", opacity: light === "red" ? 1 : 0.3 },
        ]}
      />
      <View
        style={[
          styles.circle,
          { backgroundColor: "yellow", opacity: light === "yellow" ? 1 : 0.3 },
        ]}
      />
      <View
        style={[
          styles.circle,
          { backgroundColor: "green", opacity: light === "green" ? 1 : 0.3 },
        ]}
      />
      <TouchableOpacity style={styles.button} onPress={changeLight}>
        <Text style={styles.buttonText}>Chuyển Đèn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 15,
  },
  button: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#555",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
