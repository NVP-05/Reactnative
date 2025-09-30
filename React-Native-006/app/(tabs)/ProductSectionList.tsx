import React from 'react';
import {
  SectionList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductSectionList() {
  const sections = [
    {
      title: '📱 Điện thoại',
      data: ['iPhone 15', 'Samsung Galaxy S24', 'Xiaomi Redmi Note 13'],
    },
    {
      title: '💻 Laptop',
      data: ['MacBook Pro', 'Dell XPS 15', 'Asus ROG'],
    },
    {
      title: '📟 Máy tính bảng',
      data: ['iPad Pro', 'Samsung Tab S9', 'Xiaomi Pad 6'],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>📂 Danh mục sản phẩm</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.listFooter}>
            <Text style={{ color: '#6b7280' }}>--- Hết danh sách ---</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  listHeader: {
    padding: 16,
    backgroundColor: '#2563eb',
  },
  listHeaderText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  header: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
  },
  listFooter: {
    padding: 16,
    alignItems: 'center',
  },
});
