import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Bai1() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/902-100x100.jpg")} 
        style={styles.avatar}
      />

      <Text style={styles.name}>Nguyễn Văn A</Text>

      <Text style={styles.description}>
         React Native Develope | UI/UX Enthusiast
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 20,
  alignItems: "center",
  marginHorizontal: 20,
  marginVertical: 10,

  // iOS shadow
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,

  // Android shadow
  elevation: 8,
},

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // hình tròn
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
