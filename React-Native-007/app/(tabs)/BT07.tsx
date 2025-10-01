import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {
    id: number;
    title: string;
}
export default function BT07() {
    const [jobs, setJobs] = React.useState<Props[]>([
        { id: 1, title: 'Developer' },
        { id: 2, title: 'Designer' },
        { id: 3, title: 'Tester' },
        { id: 4, title: 'Manager' },
        { id: 5, title: 'DevOps' },
        { id: 6, title: 'Support' },
        { id: 7, title: 'Sales' }
    ]);
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Chế độ hiển thị: {isLandscape ? 'Ngang' : 'Dọc'}</Text>
            </View>
            <View>
                {jobs.map((job) => (
                <View key={job.id} style={{ margin: 10, padding: 10, backgroundColor: 'lightblue' }}>
                    <Text>{job.title}</Text>
                </View>
            ))}
            </View>
        </SafeAreaView>
    );  
}
