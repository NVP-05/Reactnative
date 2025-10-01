import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useDebounce } from '@/hooks/use-debounce';

export default function BT08() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);
  
  const debouncedSearch = useDebounce(search, 500);
  
  useEffect(() => {
    if (debouncedSearch) {
      setTimeout(() => {
        const data = ['React', 'JavaScript', 'TypeScript', 'Node.js'];
        setResults(data.filter(item => item.includes(debouncedSearch)));
      }, 100);
    } else {
      setResults([]);
    }
  }, [debouncedSearch]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BT09: useDebounce</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm..."
        value={search}
        onChangeText={setSearch}
      />
      
      <Text>Query: {search}</Text>
      <Text>Debounced: {debouncedSearch}</Text>
      
      {results.map((item, index) => (
        <Text key={index} style={styles.result}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    borderRadius: 5,
  },
});
