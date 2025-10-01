import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

// Component con cấp 1
const ChildComponent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.childContainer, { backgroundColor: colors.surface }]}>
      <Text style={[styles.childText, { color: colors.text }]}>
        Component con cấp 1 - Sử dụng theme từ context
      </Text>
    </View>
  );
};

// Component con cấp 2
const GrandChildComponent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.grandChildContainer, { 
      backgroundColor: colors.background,
      borderColor: colors.border,
    }]}>
      <Text style={[styles.grandChildText, { color: colors.textSecondary }]}>
        Component con cấp 2 - Cũng sử dụng theme từ context
      </Text>
    </View>
  );
};

// Component con cấp 3
const GreatGrandChildComponent: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <View style={[styles.greatGrandChildContainer, { 
      backgroundColor: colors.primary + '20', // 20% opacity
      borderColor: colors.primary,
    }]}>
      <Text style={[styles.greatGrandChildText, { color: colors.primary }]}>
        Component con cấp 3 - Theme hiện tại: {theme}
      </Text>
    </View>
  );
};

// Component cha chứa tất cả
const NestedComponent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { 
      backgroundColor: colors.surface,
      borderColor: colors.border,
    }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Demo Component Lồng Nhau
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Tất cả components đều sử dụng theme từ context mà không cần nhận props
      </Text>
      
      <ChildComponent />
      
      <View style={styles.nestedContainer}>
        <GrandChildComponent />
        <GreatGrandChildComponent />
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  nestedContainer: {
    marginTop: 12,
    gap: 8,
  },
  childContainer: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  childText: {
    fontSize: 14,
    fontWeight: '500',
  },
  grandChildContainer: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 8,
  },
  grandChildText: {
    fontSize: 13,
  },
  greatGrandChildContainer: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
  },
  greatGrandChildText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default NestedComponent;
