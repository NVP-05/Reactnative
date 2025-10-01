import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeDemoCard: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.container, { 
      backgroundColor: colors.surface,
      borderColor: colors.border,
      shadowColor: colors.shadow,
    }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        🎨 Theme Demo Card
      </Text>
      
      <View style={[styles.colorPalette, { backgroundColor: colors.background }]}>
        <Text style={[styles.paletteTitle, { color: colors.text }]}>
          Bảng màu hiện tại:
        </Text>
        
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.background }]}>
            <Text style={[styles.colorLabel, { color: colors.text }]}>Background</Text>
          </View>
          <View style={[styles.colorBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.colorLabel, { color: colors.text }]}>Surface</Text>
          </View>
        </View>
        
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: colors.primary }]}>
            <Text style={[styles.colorLabel, { color: '#ffffff' }]}>Primary</Text>
          </View>
          <View style={[styles.colorBox, { backgroundColor: colors.secondary }]}>
            <Text style={[styles.colorLabel, { color: '#ffffff' }]}>Secondary</Text>
          </View>
        </View>
      </View>
      
      <View style={[styles.infoSection, { borderTopColor: colors.border }]}>
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          Theme hiện tại: <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </Text>
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          Component này tự động cập nhật màu sắc khi theme thay đổi
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  colorPalette: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  paletteTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  colorBox: {
    width: 80,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  colorLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoSection: {
    borderTopWidth: 1,
    paddingTop: 12,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
});

export default ThemeDemoCard;
