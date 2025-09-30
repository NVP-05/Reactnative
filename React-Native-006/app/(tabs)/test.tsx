import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Test() {
  const [data, setData] = useState(
    Array.from({ length: 300 }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
    }))
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = () => {
    if (isLoadingMore) return; // tránh gọi nhiều lần
    setIsLoadingMore(true);

    const moreData = Array.from({ length: 20 }, (_, index) => ({
      id: data.length + index + 1,
      name: `Item ${data.length + index + 1}`,
    }));

    setTimeout(() => {
      setData([...data, ...moreData]);
      setIsLoadingMore(false);
    }, 1000); // giả lập load data
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name}</Text>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>No items found</Text>}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListFooterComponentStyle={{ marginBottom: 20 }}
        ListFooterComponent={isLoadingMore ? <Text>Loading more...</Text> : null}
      />
    </SafeAreaView>
  );
}
