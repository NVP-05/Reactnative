import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from './EmptyState'

export default function BT02() {
  const [newData, setNewData] = React.useState("");
  const [data, setData] = React.useState<string[]>([]);

  const addNewItem = () => {
    if (newData.trim() !== "") {
      setData([...data, newData]);
      setNewData("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder="Nhập tên mục mới"
          value={newData}
          onChangeText={setNewData}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNewItem}>
          <Text style={styles.addButtonText}>Thêm mới</Text>
        </TouchableOpacity>
      </View>

      {data.length === 0 ? (
        <EmptyState 
          title="Chưa có dữ liệu" 
          message="Hãy bấm nút Thêm mới để bắt đầu tạo mục đầu tiên của bạn." 
        />
      ) : (
        <View>
          {data.map((item, index) => (
            <View key={index} style={{padding: 12, backgroundColor: 'white', borderRadius: 8, marginBottom: 10}}>
              <Text style={{fontSize: 16}}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f4f7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})
