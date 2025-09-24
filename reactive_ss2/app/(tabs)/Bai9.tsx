import React from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Bai9() {
  const images = [
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po",
    "https://fastly.picsum.photos/id/424/200/200.jpg?hmac=NTuJ8oj4QEYm5LnuRc3FwfhXo9bxmLLibE6TqYkk6Po"
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((uri, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Image source={{ uri }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5
  },
  item: {
    width: "32%",
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#eee"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
