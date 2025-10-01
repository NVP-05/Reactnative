import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
    id: number;
    title: string;
}
export default function BT05() {
    const [jobs, setJobs] = React.useState<Props[]>([]);
    const [newJob, setNewJob] = React.useState<string>("");
    const addJob = () => {
        if (newJob !== "") {
            const isCheck = jobs.some(job => job.title.toLowerCase() === newJob.toLowerCase());
            if (!isCheck) {
                const newJobItem = { id: Date.now(), title: newJob };
                setJobs([...jobs, newJobItem]);
                setNewJob("");
            } else {
                alert("Công việc đã tồn tại!");
            }
        } else {
            alert("Vui lòng nhập công việc!");
        }
    }
    const deleteJob = (id: number) => {
        setJobs(jobs.filter(job => job.id !== id));
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Trang chủ</Text>
      <View style={styles.inputRow}>
        <TextInput
                  placeholder="Thêm công việc mới..."
                  value={newJob}
                    onChangeText={setNewJob}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addJob}>
          <Text style={styles.addText}>THÊM</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.title}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteJob(item.id)}>
              <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 8,
  },
  addBtn: {
    backgroundColor: "#1976D2",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  todoText: {
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: "#fce4e4",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  deleteText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});