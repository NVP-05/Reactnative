import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

const ContentCard: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { 
      backgroundColor: colors.surface,
      borderColor: colors.border,
      shadowColor: colors.shadow,
    }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Content Card
      </Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        Component này sử dụng theme từ context mà không cần nhận props từ component cha.
        Màu sắc sẽ tự động thay đổi khi theme thay đổi.
      </Text>
      <View style={[styles.featureList, { borderTopColor: colors.border }]}>
        <Text style={[styles.featureItem, { color: colors.text }]}>
          ✅ Sử dụng useContext
        </Text>
        <Text style={[styles.featureItem, { color: colors.text }]}>
          ✅ Không cần prop drilling
        </Text>
        <Text style={[styles.featureItem, { color: colors.text }]}>
          ✅ Tự động cập nhật theme
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
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  featureList: {
    borderTopWidth: 1,
    paddingTop: 12,
  },
  featureItem: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default ContentCard;
