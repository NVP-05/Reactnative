import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & { quantity: number };

const products: Product[] = [
  { id: 1, name: "iPhone 15 Pro", price: 25000000 },
  { id: 2, name: "MacBook Air M3", price: 32000000 },
  { id: 3, name: "Apple Watch Series 9", price: 11000000 },
  { id: 4, name: "AirPods Pro 2", price: 6000000 },
];

const ProductItem = ({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toLocaleString()}đ</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={() => onAdd(product)}>
      <Text style={styles.buttonText}>THÊM VÀO GIỎ</Text>
    </TouchableOpacity>
  </View>
);

const ShopScreen = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.cartCount}>Số mặt hàng trong giỏ: {totalItems}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onAdd={handleAddToCart} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  cartCount: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, color: "gray", marginTop: 4 },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default ShopScreen;
