import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Bai2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lần 1: Sắp xếp dọc (column)</Text>
      <View style={styles.columnContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>

      <Text style={styles.title}>Lần 2: Sắp xếp ngang (row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>

      <Text style={styles.title}>Lần 3: Sắp xếp dạng lưới (wrap)</Text>
      <View style={styles.wrapContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  box: {
    margin: 5,
    borderRadius: 6,
  },
  box1: { backgroundColor: "#EF4444", width: 100, height: 40 },
  box2: { backgroundColor: "#F97316", width: 80, height: 50 },
  box3: { backgroundColor: "#22C55E", width: 120, height: 60 },
  box4: { backgroundColor: "#3B82F6", width: 90, height: 30 },
  box5: { backgroundColor: "#8B5CF6", width: 110, height: 55 },

  columnContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f3f4f6",
    padding: 10,
  },

  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
});
