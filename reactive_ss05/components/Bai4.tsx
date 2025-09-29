import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Bai4() {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, liked ? styles.liked : styles.unliked]}
        onPress={() => setLiked(!liked)}
      >
        <Text style={styles.text}>{liked ? "Đã thích" : "Thích"}</Text>
      </TouchableOpacity>
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
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  unliked: {
    backgroundColor: "gray",
  },
  liked: {
    backgroundColor: "blue",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
