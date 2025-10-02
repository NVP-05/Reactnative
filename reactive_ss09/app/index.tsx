import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    Modal,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const STORAGE_KEY = '@contacts_list';

export default function App() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingContact, setEditingContact] = useState<any>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<any>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    saveContacts();
  }, [contacts]);

  async function loadContacts() {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (json) {
        const parsed = JSON.parse(json);
        setContacts(Array.isArray(parsed) ? parsed : []);
      }
    } catch (e) {
      console.warn('load error', e);
    }
  }

  async function saveContacts() {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    } catch (e) {
      console.warn('save error', e);
    }
  }

  function openAddModal() {
    setEditingContact(null);
    setName('');
    setPhone('');
    setEmail('');
    setModalVisible(true);
  }

  function openEditModal(contact: any) {
    setEditingContact(contact);
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email || '');
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setEditingContact(null);
    setName('');
    setPhone('');
    setEmail('');
  }

  function validate() {
    if (!name.trim()) {
      Alert.alert('Lỗi', 'Tên không được để trống');
      return false;
    }
    if (!phone.trim()) {
      Alert.alert('Lỗi', 'Số điện thoại không được để trống');
      return false;
    }
    return true;
  }

  function handleSave() {
    if (!validate()) return;
    if (editingContact) {
      const updated = contacts.map(c =>
        c.id === editingContact.id ? { ...c, name: name.trim(), phone: phone.trim(), email: email.trim() } : c
      );
      setContacts(updated);
    } else {
      const newContact = {
        id: Date.now().toString(),
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
      };
      setContacts([newContact, ...contacts]);
    }
    closeModal();
  }

  function confirmDelete(contact: any) {
    if (isDeleting) return; // Tránh gọi nhiều lần
    
    console.log('confirmDelete called with:', contact);
    setContactToDelete(contact);
    setDeleteModalVisible(true);
  }

  function handleDeleteConfirm() {
    if (contactToDelete) {
      console.log('Delete confirmed for:', contactToDelete.id);
      handleDelete(contactToDelete.id);
      setDeleteModalVisible(false);
      setContactToDelete(null);
    }
  }

  function handleDeleteCancel() {
    setDeleteModalVisible(false);
    setContactToDelete(null);
  }

  function handleDelete(id: string) {
    console.log('handleDelete called with id:', id);
    console.log('Current contacts:', contacts);
    const filtered = contacts.filter(c => c.id !== id);
    console.log('Filtered contacts:', filtered);
    setContacts(filtered);
  }

  function renderItem({ item }: { item: any }) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.itemText} onPress={() => openEditModal(item)}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPhone}>{item.phone}</Text>
        </TouchableOpacity>
        <View style={styles.itemActions}>
          <TouchableOpacity style={styles.editBtn} onPress={() => openEditModal(item)}>
            <Text style={styles.editTxt}>SỬA</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.deleteBtn, isDeleting && styles.disabledBtn]} 
            onPress={() => confirmDelete(item)}
            disabled={isDeleting}
          >
            <Text style={styles.deleteTxt}>XÓA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Danh bạ</Text>
        <TouchableOpacity style={styles.addBtn} onPress={openAddModal}>
          <Text style={styles.addTxt}>THÊM MỚI</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<View style={styles.empty}><Text style={styles.emptyTxt}>Danh bạ của bạn trống.</Text></View>}
        contentContainerStyle={contacts.length ? null : styles.emptyContainer}
      />

      <Modal animationType="fade" visible={modalVisible} transparent={true} presentationStyle="overFullScreen">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{editingContact ? 'Sửa Liên hệ' : 'Thêm Liên hệ mới'}</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                <Text style={styles.closeTxt}>ĐÓNG</Text>
              </TouchableOpacity>
            </View>

            <TextInput style={styles.input} placeholder="Tên" value={name} onChangeText={setName} />

            <TextInput style={styles.input} placeholder="Số điện thoại" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

            <TextInput style={styles.input} placeholder="Email (không bắt buộc)" value={email} onChangeText={setEmail} keyboardType="email-address" />

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveTxt}>LƯU</Text>
            </TouchableOpacity>

            {editingContact ? (
              <TouchableOpacity style={styles.removeBtn} onPress={() => confirmDelete(editingContact)}>
                <Text style={styles.removeTxt}>XÓA LIÊN HỆ</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Modal>

      {/* Modal xác nhận xóa */}
      <Modal animationType="fade" visible={deleteModalVisible} transparent={true} presentationStyle="overFullScreen">
        <View style={styles.deleteModalOverlay}>
          <View style={styles.deleteModal}>
            <Text style={styles.deleteModalTitle}>Xác nhận Xóa</Text>
            <Text style={styles.deleteModalMessage}>
              Bạn có chắc chắn muốn xóa "{contactToDelete?.name}"?
            </Text>
            <View style={styles.deleteModalActions}>
              <TouchableOpacity style={styles.deleteCancelBtn} onPress={handleDeleteCancel}>
                <Text style={styles.deleteCancelTxt}>HỦY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteConfirmBtn} onPress={handleDeleteConfirm}>
                <Text style={styles.deleteConfirmTxt}>XÓA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { height: 56, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#eee' },
  title: { fontSize: 22, fontWeight: '700' },
  addBtn: { backgroundColor: '#2196F3', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6, elevation: 2 },
  addTxt: { color: '#fff', fontWeight: '700' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  empty: { alignItems: 'center', paddingTop: 40 },
  emptyTxt: { color: '#999' },
  itemContainer: { flexDirection: 'row', padding: 14, borderBottomWidth: 1, borderColor: '#f0f0f0', alignItems: 'center', justifyContent: 'space-between' },
  itemText: { flex: 1, paddingRight: 10 },
  itemName: { fontSize: 16, fontWeight: '600' },
  itemPhone: { color: '#666', marginTop: 4 },
  itemActions: { flexDirection: 'row', gap: 8 },
  editBtn: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#4CAF50', borderRadius: 6 },
  editTxt: { color: '#fff', fontWeight: '700' },
  deleteBtn: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#ff5252', borderRadius: 6 },
  deleteTxt: { color: '#fff', fontWeight: '700' },
  disabledBtn: { backgroundColor: '#ccc', opacity: 0.6 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '90%', maxHeight: '80%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  modalTitle: { fontSize: 18, fontWeight: '700' },
  closeBtn: { backgroundColor: '#2196F3', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  closeTxt: { color: '#fff', fontWeight: '700' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 10 },
  saveBtn: { backgroundColor: '#2196F3', paddingVertical: 12, borderRadius: 6, alignItems: 'center', marginTop: 6 },
  saveTxt: { color: '#fff', fontWeight: '700' },
  removeBtn: { backgroundColor: '#f44336', paddingVertical: 12, borderRadius: 6, alignItems: 'center', marginTop: 10 },
  removeTxt: { color: '#fff', fontWeight: '700' },
  // Styles cho modal xác nhận xóa
  deleteModalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  deleteModal: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '85%', maxWidth: 400 },
  deleteModalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  deleteModalMessage: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center', lineHeight: 22 },
  deleteModalActions: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  deleteCancelBtn: { flex: 1, backgroundColor: '#6c757d', paddingVertical: 12, borderRadius: 6, alignItems: 'center' },
  deleteCancelTxt: { color: '#fff', fontWeight: '700' },
  deleteConfirmBtn: { flex: 1, backgroundColor: '#dc3545', paddingVertical: 12, borderRadius: 6, alignItems: 'center' },
  deleteConfirmTxt: { color: '#fff', fontWeight: '700' },
});
