import React, { useState } from 'react'
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CourseList() {
  const [data, setData] = useState([
    { id: '1', name: 'Khóa học React Native cơ bản' },
    { id: '2', name: 'Khóa học Spring Boot nâng cao' },
    { id: '3', name: 'Khóa học Thiết kế UI/UX' },
  ]);
  const loadMore = () => {
    const newItems = [
      { id: Math.random().toString(), name: 'Khóa học mới ' + (data.length + 1) },
      { id: Math.random().toString(), name: 'Khóa học mới ' + (data.length + 2) },
    ];
    setData([...data, ...newItems]);
  };
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Danh sách khóa học</Text>
    </View>
  );
  const renderFooter = () => (
    <TouchableOpacity style={styles.footerButton} onPress={loadMore}>
      <Text style={styles.footerText}>Tải thêm</Text>
    </TouchableOpacity>
  );
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
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  )
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
  footerButton: {
    padding: 16,
    backgroundColor: '#10b981',
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  footerText: {
    color: 'white',
    fontWeight: '600',
  },
});
