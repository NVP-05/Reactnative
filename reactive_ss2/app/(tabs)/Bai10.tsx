import React from "react";
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function Bai10() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tạo tài khoản</Text>
      <Text style={styles.subtitle}>Điền thông tin để bắt đầu</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, styles.inputError]}
          value="emailkhonghople@"
        />
        <Text style={styles.errorText}>Vui lòng nhập một địa chỉ email hợp lệ.</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          style={[styles.input, styles.inputSuccess]}
          secureTextEntry
          value="password123"
        />
      </View>

      <Pressable style={[styles.button, styles.buttonDisabled]} disabled>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
    color: "#111"
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 30
  },
  field: {
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    color: "#111",
    marginBottom: 6
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff"
  },
  inputError: {
    borderColor: "red"
  },
  inputSuccess: {
    borderColor: "green"
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 4
  },
  button: {
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center"
  },
  buttonDisabled: {
    backgroundColor: "#ccc"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  }
});
