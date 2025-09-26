import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type UserInfoCardProps = {
  name: string;
  avatarUrl: string;
  email: string;
};

function UserInfoCard({ name, avatarUrl, email }: UserInfoCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

export default function Bai3() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      <ScrollView>
        <UserInfoCard
          name="Trần Văn An"
          avatarUrl="https://i.pravatar.cc/150?u=2"
          email="tran.an@example.com"
        />
        <UserInfoCard
          name="Lý Thị Bình"
          avatarUrl="https://i.pravatar.cc/150?u=1"
          email="ly.binh@example.com"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
});
