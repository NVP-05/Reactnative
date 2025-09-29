import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type BusinessCardProps = {
  avatarUrl: string;
  name: string;
  jobTitle: string;
  contactInfo: string;
};

const BusinessCard = ({ avatarUrl, name, jobTitle, contactInfo }: BusinessCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <Text style={styles.contact}>{contactInfo}</Text>
    </View>
  );
};

export default function Bai2() {
  return (
    <View style={styles.container}>
      <BusinessCard
        avatarUrl="https://i.pravatar.cc/150?img=12"
        name="Nguyễn Văn A"
        jobTitle="Frontend Developer"
        contactInfo="📧 a.nguyen@example.com"
      />
      <BusinessCard
        avatarUrl="https://i.pravatar.cc/150?img=30"
        name="Trần Thị B"
        jobTitle="UI/UX Designer"
        contactInfo="📞 0987 654 321"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#fff",
  },
  card: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 250,
    marginBottom: 20,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  contact: {
    fontSize: 13,
    color: "#333",
  },
});
