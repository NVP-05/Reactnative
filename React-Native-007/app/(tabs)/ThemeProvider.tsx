import React, { createContext, useState, ReactNode } from "react";

// Định nghĩa types
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  colors: {
    background: string;
    text: string;
    surface: string;
    primary: string;
  };
}

// Tạo context với type
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Định nghĩa props cho ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  // Định nghĩa colors dựa trên theme
  const colors = {
    background: isDark ? "#121212" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    surface: isDark ? "#1e1e1e" : "#f8f9fa",
    primary: isDark ? "#0d6efd" : "#007bff",
  };

  const value: ThemeContextType = {
    isDark,
    toggleTheme,
    colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
