import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa theme types
export type Theme = 'light' | 'dark';

// Định nghĩa theme colors
export const themeColors = {
  light: {
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
    primary: '#007bff',
    secondary: '#6c757d',
    border: '#dee2e6',
    shadow: '#000000',
  },
  dark: {
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    primary: '#0d6efd',
    secondary: '#6c757d',
    border: '#333333',
    shadow: '#000000',
  },
};

// Định nghĩa ThemeContext type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: typeof themeColors.light;
}

// Tạo ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const colors = themeColors[theme];

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook để sử dụng ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
