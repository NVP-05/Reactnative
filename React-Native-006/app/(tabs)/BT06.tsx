import React, { useState } from 'react';
import { SectionList, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BT06() {
  const data = [
    { title: 'Thực phẩm', data: ['Táo', 'Chuối', 'Cam'] },
    { title: 'Điện tử', data: ['Laptop', 'Điện thoại', 'Tai nghe'] },
    { title: 'Sách', data: ['React Native', 'Spring Boot', 'UI/UX'] },
  ];

  const [search, setSearch] = useState('');

  const filtered = data
    .map(s => ({
      ...s,
      data: s.data.filter(i => i.toLowerCase().includes(search.toLowerCase()))
    }))
    .filter(s => s.data.length > 0);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Tìm kiếm..."
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <SectionList
        sections={filtered}
        keyExtractor={(item, i) => item + i}
        renderItem={({ item }) => <Text style={{ padding: 8 }}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{section.title}</Text>
        )}
        ListEmptyComponent={<Text>Không có kết quả</Text>}
      />
    </View>
    </SafeAreaView>
  );
}
