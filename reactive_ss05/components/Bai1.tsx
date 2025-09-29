import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BusinessCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.jobTitle}>Lập trình viên React Native</Text>
      <Text style={styles.contact}>📧 nguyenvana@example.com</Text>
      <Text style={styles.contact}>📞 0123 456 789</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 300,
    alignSelf: "center",
    marginTop: 50,
    elevation: 3, // đổ bóng cho Android
    shadowColor: "#000", // đổ bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  contact: {
    fontSize: 14,
    color: "#333",
  },
});

export default BusinessCard;
