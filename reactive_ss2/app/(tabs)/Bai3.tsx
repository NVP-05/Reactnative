import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Bai3() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Họ và tên:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.result}>Bạn đã nhập: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  result: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});
