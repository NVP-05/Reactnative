import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai8() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handlePress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleEqual = () => {
    try {
      const res = eval(input);
      setResult(res.toString());
    } catch (e) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.row}>
        {["7", "8", "9", "/"].map((item) => (
          <CalcButton key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
      <View style={styles.row}>
        {["4", "5", "6", "*"].map((item) => (
          <CalcButton key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
      <View style={styles.row}>
        {["1", "2", "3", "-"].map((item) => (
          <CalcButton key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>
      <View style={styles.row}>
        {["0", "C", "=", "+"].map((item) => (
          <CalcButton
            key={item}
            label={item}
            onPress={() =>
              item === "="
                ? handleEqual()
                : item === "C"
                ? handleClear()
                : handlePress(item)
            }
          />
        ))}
      </View>
    </View>
  );
}

type CalcButtonProps = {
  label: string;
  onPress: () => void;
};

function CalcButton({ label, onPress }: CalcButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  display: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  input: {
    color: "#fff",
    fontSize: 24,
    textAlign: "right",
  },
  result: {
    color: "#0f0",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
