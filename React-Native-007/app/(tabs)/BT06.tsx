import React from "react";
import ThemeProvider from "./ThemeProvider";
import HomeScreen from "./HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BT06() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}
