import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Bai1() {
  return (
   <View style={styles.cart}>
    <Image source={{uri:"https://fastly.picsum.photos/id/612/100/100.jpg?hmac=o0piyPQxbw-I29izueY4XSQ0tHANhzN1Euu2okXzRMk"}} style={styles.avart}></Image>
    <Text style ={styles.name}>Lại Hoàng Nam</Text>
    <Text style={styles.job}>React Native Develop | UI/UX Emthusiast</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  cart:{
    backgroundColor: "#fff",
    borderRadius: 16,
    padding:20,
    alignItems:"center",
    marginHorizontal:20,
    marginVertical: 10
  },
  avart:{
    width:100,
    height:100,
    borderRadius: 50,
    marginBottom:15
  },
  name:{
    fontWeight: "bold",
    fontSize: 30
  },
  job:{
    fontStyle: "italic",
    color:"#5a5757ff"
  }
})

