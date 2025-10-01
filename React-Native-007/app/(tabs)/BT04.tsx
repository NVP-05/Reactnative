import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNetInfo } from "@react-native-community/netinfo";

export default function BT04() {
    const [isConnected, setIsConnected] = React.useState<boolean>(false);
    const network = useNetInfo();
    useEffect(() => {
        if (network.isConnected !== null) {
            setIsConnected(network.isConnected);
        }
    }, [network]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Trang chủ</Text>
            </View>
            <View style={styles.content}>
                {!isConnected && (
                    <View style={styles.statusCard}>
                        <Text style={styles.statusText}>Không có kết nối mạng</Text>
                    </View>
                )}
                <Text style={styles.label}>Trạng thái kết nối mạng: </Text>
                <Text style={[styles.value, { color: isConnected ? '#27ae60' : '#e74c3c' }]}>
                    Có kết nối mạng không? {isConnected ? "Có" : "Không"}
                </Text>
                {isConnected && (
                    <Text style={styles.connectionType}>Loại kết nối: {network.type}</Text>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#3498db',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    statusCard: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statusText: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: '600',
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        color: '#2c3e50',
        fontWeight: '600',
        marginBottom: 8,
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 12,
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#3498db',
    },
    connectionType: {
        fontSize: 16,
        color: '#27ae60',
        fontWeight: '600',
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#27ae60',
    },
});
