import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Bai5() {
  const [vnd, setVnd] = useState("");
  const [usd, setUsd] = useState("");
  const rate = 25000;

  const handleVnd = (text: string) => {
    setVnd(text);
    const num = parseFloat(text);
    setUsd(!isNaN(num) ? (num / rate).toFixed(2) : "");
  };

  const handleUsd = (text: string) => {
    setUsd(text);
    const num = parseFloat(text);
    setVnd(!isNaN(num) ? (num * rate).toString() : "");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>VND:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        keyboardType="numeric"
        value={vnd}
        onChangeText={handleVnd}
      />

      <Text>USD:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5 }}
        keyboardType="numeric"
        value={usd}
        onChangeText={handleUsd}
      />
    </View>
  );
}
