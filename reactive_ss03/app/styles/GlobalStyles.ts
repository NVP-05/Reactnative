import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#1E90FF",
  secondary: "#FF7F50",
  text: "#333333",
  background: "#FFFFFF",
  error: "#FF0000",
  gray: "#CCCCCC",
};

export const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  title: 24,
};

export const SPACING = {
  sm: 8,
  md: 16,
  lg: 24,
};

export const CONTAINER_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.md,
  },
});
