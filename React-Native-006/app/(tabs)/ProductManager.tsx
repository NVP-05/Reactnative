import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProductManager() {
  const initialData = [
    { id: "1", name: "iPhone 13", price: 799, description: "Điện thoại thông minh Apple iPhone 13.", details: "Màn hình 6.1 inch, camera 12MP, bộ nhớ 128GB." },
    { id: "2", name: "Samsung Galaxy S21", price: 999, description: "Điện thoại cao cấp Samsung Galaxy S21.", details: "Màn hình 6.2 inch, camera 64MP, bộ nhớ 128GB." },
    { id: "3", name: "MacBook Pro", price: 1299, description: "Máy tính xách tay Apple MacBook Pro.", details: "Màn hình Retina 13 inch, vi xử lý M1, 256GB SSD." },
    { id: "4", name: "Dell XPS 13", price: 1099, description: "Laptop Dell XPS 13 với thiết kế mỏng nhẹ.", details: "Màn hình 13 inch, vi xử lý Intel Core i7, 512GB SSD." },
    { id: "5", name: "Sony WH-1000XM4", price: 349, description: "Tai nghe Sony WH-1000XM4 chống ồn.", details: "Chống ồn chủ động, thời gian sử dụng lên đến 30 giờ." },
    { id: "6", name: "Apple Watch Series 7", price: 399, description: "Đồng hồ thông minh Apple Watch Series 7.", details: "Màn hình 1.7 inch, GPS, theo dõi sức khoẻ." },
    { id: "7", name: "iPad Pro", price: 799, description: "Máy tính bảng Apple iPad Pro.", details: "Màn hình 11 inch, chip M1, bộ nhớ 128GB." },
  ];  

  const [count, setCount] = React.useState(1);
  const [data, setData] = React.useState(initialData.slice(0, 2)); 

  const loadMore = () => {
    setCount(prev => {
      const newCount = prev + 1;
      const newData = initialData.slice(0, (newCount + 1) * 2); 
      setData(newData);
      return newCount;
    });
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Danh sách sản phẩm</Text>
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
            <Text style={{ fontWeight: '600' }}>{item.name} - ${item.price}</Text>
            <Text>{item.description}</Text>
            <Text style={{ color: 'gray' }}>{item.details}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  header: { padding: 16, backgroundColor: '#2563eb' },
  headerText: { color: 'white', fontSize: 18, fontWeight: '600' },
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#e5e7eb' },
  footerButton: {
    padding: 16,
    backgroundColor: '#10b981',
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  footerText: { color: 'white', fontWeight: '600' },
});
