import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, Send } from "lucide-react-native";

export default function Bai3() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>thuy_anh26</Text>
      </View>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        }}
        style={styles.postImage}
      />

      <View style={styles.actionBar}>
        <TouchableOpacity>
          <Heart size={28} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MessageCircle size={28} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Send size={28} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
        <Text style={styles.username}>thuy_anh26 </Text>
        Một buổi chiều yên bình bên bờ biển. 🌊☀️
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 6,
  },
  icon: {
    marginRight: 14,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
