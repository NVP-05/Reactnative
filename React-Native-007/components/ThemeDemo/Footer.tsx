import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.text, { color: colors.textSecondary }]}>
        Theme hiện tại: {theme === 'light' ? 'Sáng' : 'Tối'}
      </Text>
      <Text style={[styles.text, { color: colors.textSecondary }]}>
        Footer component cũng sử dụng theme từ context
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default Footer;
