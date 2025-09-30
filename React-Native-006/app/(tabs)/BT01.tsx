import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BT01() {
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 28 },
    { id: 5, name: 'Eve', age: 22 },
    { id: 6, name: 'Frank', age: 40 },
    { id: 7, name: 'Grace', age: 27 },
    { id: 8, name: 'Heidi', age: 32 },
    { id: 9, name: 'Ivan', age: 29 },
    { id: 10, name: 'Judy', age: 24 },
    { id: 11, name: 'Mallory', age: 31 },
    { id: 12, name: 'Niaj', age: 26 },
    { id: 13, name: 'Olivia', age: 33 },
    { id: 14, name: 'Peggy', age: 23 },
    { id: 15, name: 'Sybil', age: 34 },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.age}>Age: {item.age}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3, 
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  age: {
    fontSize: 14,
    color: '#666',
  },
});
