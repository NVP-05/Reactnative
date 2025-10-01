import React from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function BT04() {
    const inputRef = React.useRef<TextInput>(null); 
    
    const handlePress = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>TextInput Focus Demo</Text>
                
                <TextInput 
                    style={styles.textInput}
                    placeholder='Nhập dữ liệu....' 
                    ref={inputRef}
                />
                
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Focus Input</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 30,
        textAlign: 'center',
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderColor: '#3498db',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#ffffff',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});