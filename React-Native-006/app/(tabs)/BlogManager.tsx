import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
};

export default function BlogManager() {
  const allPosts: BlogPost[] = [
    { id: 1, title: "Hướng dẫn React Native", author: "Nguyễn Văn A", date: "2023-01-15" },
    { id: 2, title: "Tìm hiểu về TypeScript", author: "Trần Thị B", date: "2023-02-10" },
    { id: 3, title: "Quản lý trạng thái với Redux", author: "Lê Văn C", date: "2023-03-05" },
    { id: 4, title: "Xây dựng giao diện với Flexbox", author: "Phạm Thị D", date: "2023-04-20" },
    { id: 5, title: "Kết nối API trong React Native", author: "Hoàng Văn E", date: "2023-05-18" },
    { id: 6, title: "Tối ưu hiệu suất ứng dụng", author: "Vũ Thị F", date: "2023-06-12" },
    { id: 7, title: "Triển khai ứng dụng lên App Store", author: "Đặng Văn G", date: "2023-07-08" },
    { id: 8, title: "Sử dụng Hooks trong React Native", author: "Ngô Thị H", date: "2023-08-22" },
    { id: 9, title: "Quản lý định tuyến với React Navigation", author: "Trịnh Văn I", date: "2023-09-14" },
    { id: 10, title: "Kiểm thử ứng dụng React Native", author: "Bùi Thị J", date: "2023-10-30" },
    { id: 11, title: "Sử dụng Context API", author: "Phan Văn K", date: "2023-11-11" },
    { id: 12, title: "Xử lý lỗi trong React Native", author: "Lý Thị L", date: "2023-12-25" },
    { id: 13, title: "Tích hợp Firebase vào ứng dụng", author: "Trần Văn M", date: "2024-01-05" },
  ];

  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>(allPosts.slice(0, 10));
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadMore = () => {
    if (isLoadingMore) return;
    if ((page + 1) * 5 > allPosts.length) return; 

    setIsLoadingMore(true);
    setTimeout(() => {
      const newData = allPosts.slice(0, (page + 1) * 5);
      setVisiblePosts(newData);
      setPage(page + 1);
      setIsLoadingMore(false);
    }, 1000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setVisiblePosts(allPosts.slice(0, 5));
      setPage(1);
      setRefreshing(false);
    }, 1000);
  };
  const renderBlogPost = ({ item }: { item: BlogPost }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{item.author} - {item.date}</Text>
    </View>
  );
  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return <ActivityIndicator style={{ margin: 16 }} size="large" color="#2980b9" />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={visiblePosts}
        renderItem={renderBlogPost}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<Text style={styles.header}>Danh sách bài viết</Text>}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    color: "#2c3e50",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#34495e",
  },
  meta: {
    fontSize: 13,
    color: "#7f8c8d",
  },
});
