import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function EmptyState({title, message}: {title: string, message: string}) {
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title?title:"Không có dữ liệu"}</Text>
      <Text style={styles.message}>{message?message:"Hiện tại không có mục nào để hiển thị"}</Text>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    }
});
