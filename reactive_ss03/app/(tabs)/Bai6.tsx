import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
  id: string;
  name: string;
};

const products: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  name: `Sản phẩm ${i + 1}`,
}));

export default function Bai6() {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;

  let numColumns = 2;
  if (isTablet) {
    numColumns = 4;
  } else if (width > height) {
    numColumns = 3;
  }

  const itemSize = (width - 20) / numColumns;

  const renderItem = ({ item }: { item: Product }) => (
    <View style={[styles.item, { width: itemSize, height: itemSize }]}>
      <Text style={[styles.text, { fontSize: itemSize * 0.1 }]}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  item: {
    backgroundColor: "#4CAF50",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
