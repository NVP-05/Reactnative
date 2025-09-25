import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function Bai5() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text>Nội dung của bạn sẽ xuất hiện ở đây</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        backgroundColor: "#2196F3",
        elevation: 4, 
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        textAlign: "center",
        color: "#000",
      },
      android: {
        textAlign: "left",
        color: "#fff",
      },
    }),
  },
});
