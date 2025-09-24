import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onPress?: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ title, type = "primary", disabled = false, onPress }) => {
  const buttonStyle = [
    styles.button,
    type === "primary" && styles.primary,
    type === "secondary" && styles.secondary,
    type === "danger" && styles.danger,
    disabled && styles.disabled,
  ];

  const textStyle = [
    styles.text,
    type === "secondary" && styles.secondaryText,
    disabled && styles.disabledText,
  ];

  return (
    <Pressable
      style={buttonStyle}
      onPress={!disabled ? onPress : undefined}
      disabled={disabled}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default function Bai8() {
  return (
    <View style={styles.container}>
      <CustomButton title="Button Primary" type="primary" />
      <CustomButton title="Button Secondary" type="secondary" />
      <CustomButton title="Button Danger" type="danger" />
      <CustomButton title="Button Disabled" disabled />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#f5f5f5",
  },
  button: {
    width: 250,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  primary: {
    backgroundColor: "#007BFF",
  },
  secondary: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#007BFF",
  },
  secondaryText: {
    color: "#007BFF",
  },
  danger: {
    backgroundColor: "#FF3B30",
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  disabledText: {
    color: "#888",
  },
});
