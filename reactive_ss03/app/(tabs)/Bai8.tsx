import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

export default function Bai8() {
  const fontScale = width < 400 ? 1 : width < 600 ? 1.2 : 1.4;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80" }}
        style={styles.coverImage}
      />

      <Text style={[styles.title, { fontSize: 22 * fontScale }]}>
        React Native: Xây dựng ứng dụng di động đa nền tảng
      </Text>

      <View style={styles.authorContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.authorName}>Sơn Nguyễn</Text>
          <Text style={styles.date}>Đăng ngày: 07/09/2025</Text>
        </View>
      </View>

      <Text style={[styles.content, { fontSize: 16 * fontScale }]}>
        React Native đã cách mạng hóa lĩnh vực phát triển ứng dụng di động bằng
        cách cho phép các nhà phát triển xây dựng các ứng dụng gốc cho cả iOS và
        Android từ một cơ sở mã duy nhất. Được phát triển bởi Facebook,
        framework này sử dụng thư viện React, một trong những thư viện
        JavaScript phổ biến nhất để xây dựng giao diện người dùng. {"\n\n"}
        Ưu điểm lớn nhất của React Native là hiệu suất cao cùng khả năng phát
        triển nhanh chóng, tiết kiệm chi phí mà vẫn mang lại trải nghiệm mượt mà
        như ứng dụng gốc.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    margin: 16,
    color: "#111",
    fontFamily: "System", 
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorName: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  content: {
    marginHorizontal: 16,
    lineHeight: 22,
    color: "#444",
    fontFamily: "serif", 
  },
});
