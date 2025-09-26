import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";

function TodoItem({ text, onDelete }: { text: string; onDelete: () => void }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "red" }}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function TodoApp() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <TextInput
        placeholder="Nhập ghi chú..."
        value={note}
        onChangeText={setNote}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Thêm" onPress={addNote} />

      <FlatList
        data={notes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem text={item} onDelete={() => deleteNote(index)} />
        )}
      />
    </View>
  );
}
