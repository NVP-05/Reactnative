import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Bai7() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Chào cậu, cậu khỏe không?", sender: "other" },
    { id: 2, text: "Tớ khỏe, cảm ơn cậu. Còn cậu thì sao?", sender: "me" },
    { id: 3, text: "Tớ cũng ổn. Đang làm gì đó?", sender: "other" },
    { id: 4, text: "Tớ đang học React Native, khá là thú vị đó!", sender: "me" },
  ]);

  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "me",
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={90}
      >
        <ScrollView style={styles.messagesContainer}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text
                style={{
                  color: msg.sender === "me" ? "#fff" : "#000",
                  fontSize: 16,
                }}
              >
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhắn tin..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={{ color: "#007AFF", fontWeight: "bold" }}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  myMessage: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f2f2f2",
    marginRight: 8,
  },
  sendButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
