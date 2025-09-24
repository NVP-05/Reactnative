import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Bai6() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    'Học React Native Styling',
    'Làm bài tập về ScrollView',
    'Tìm hiểu về component Pressable',
    'Chuẩn bị cho dự án cuối kỳ',
    'Đọc sách chuyên ngành 30 phút',
  ]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc mới..."
          value={task}
          onChangeText={setTask}
        />
        <Pressable style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Thêm</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.list}>
        {tasks.map((item, index) => (
          <View key={index} style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    marginLeft: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});
