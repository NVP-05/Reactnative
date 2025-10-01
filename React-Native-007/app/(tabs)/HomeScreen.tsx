import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { ThemeContext } from "./ThemeProvider";

export default function HomeScreen() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    return null; // hoặc return một loading component
  }
  
  const { isDark, toggleTheme, colors } = context;

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Theme Management Demo
        </Text>
        
        <Text style={[styles.subtitle, { color: colors.text }]}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>

        <View style={[styles.card, { backgroundColor: colors.surface }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Sử dụng useContext
          </Text>
          <Text style={[styles.cardText, { color: colors.text }]}>
            Component này sử dụng theme từ context mà không cần nhận props từ component cha.
            Màu sắc sẽ tự động thay đổi khi theme thay đổi.
          </Text>
        </View>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={toggleTheme}
        >
          <Text style={styles.buttonText}>
            {isDark ? "☀️ Chuyển sang Light Mode" : "🌙 Chuyển sang Dark Mode"}
          </Text>
        </TouchableOpacity>

        <View style={[styles.infoCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.infoTitle, { color: colors.text }]}>
            Lợi ích của useContext:
          </Text>
          <Text style={[styles.infoItem, { color: colors.text }]}>
            • Giải quyết vấn đề
          </Text>
          <Text style={[styles.infoItem, { color: colors.text }]}>
            • Quản lý state toàn cục dễ dàng
          </Text>
          <Text style={[styles.infoItem, { color: colors.text }]}>
            • Component con tự động cập nhật khi context thay đổi
          </Text>
          <Text style={[styles.infoItem, { color: colors.text }]}>
            • Code sạch hơn, ít props truyền xuống
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoCard: {
    padding: 20,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoItem: {
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 20,
  },
});
