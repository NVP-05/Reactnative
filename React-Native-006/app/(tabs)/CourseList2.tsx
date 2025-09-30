import React, { useState, useCallback } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CourseList2() {
  const [data, setData] = useState([
    { id: '1', name: 'Khóa học React Native cơ bản' },
    { id: '2', name: 'Khóa học Spring Boot nâng cao' },
    { id: '3', name: 'Khóa học Thiết kế UI/UX' },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData([
        { id: '1', name: 'Khóa học React Native cơ bản (mới)' },
        { id: '2', name: 'Khóa học Spring Boot nâng cao (mới)' },
        { id: '3', name: 'Khóa học Thiết kế UI/UX (mới)' },
      ]);
      setRefreshing(false);
    }, 1500);
  }, []);

  const loadMore = () => {
    if (loadingMore) return; 
    setLoadingMore(true);
    setTimeout(() => {
      const newItems = [
        { id: Math.random().toString(), name: 'Khóa học mới ' + (data.length + 1) },
        { id: Math.random().toString(), name: 'Khóa học mới ' + (data.length + 2) },
      ];
      setData((prev) => [...prev, ...newItems]);
      setLoadingMore(false);
    }, 1500);
  };
  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#2563eb" />
        <Text style={{ marginLeft: 8 }}>Đang tải thêm...</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>📚 Danh sách khóa học</Text>
          </View>
        }
        ListFooterComponent={renderFooter}
        refreshing={refreshing}       
        onRefresh={onRefresh}         
        onEndReached={loadMore}       
        onEndReachedThreshold={0.5}    
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 16,
    backgroundColor: '#2563eb',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
