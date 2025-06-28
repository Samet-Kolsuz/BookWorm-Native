import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addBook, updateBook } from '../redux/slices/bookSlice'
import pages from '../constants'

const CreatePage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const isEdit = route?.params?.isEdit || false;
  const bookData = route?.params?.book || {};

  const [title, setTitle] = useState(bookData.title || '');
  const [author, setAuthor] = useState(bookData.author || '');
  const [genre, setGenre] = useState(bookData.genre || '');
  const [year, setYear] = useState(bookData.year ? bookData.year.toString() : '');
  const [image, setImage] = useState(bookData.image || 'https://picsum.photos/200');

  useEffect(() => {
    navigation.setOptions({
      title: isEdit ? 'Kitap Düzenle' : 'Yeni Kitap Ekle'
    });
  }, [navigation, isEdit]);

  const handleSave = () => {
    if (!title || !author || !genre || !year) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
      return;
    }

    const bookInfo = {
      title,
      author,
      genre,
      year: parseInt(year),
      image,
    };

    if (isEdit) {
      dispatch(updateBook({ 
        id: bookData.id, 
        book: bookInfo 
      }));
      Alert.alert('Başarılı', 'Kitap güncellendi!', [
        { text: 'Tamam', onPress: () => navigation.navigate(pages.HOMEPAGE) }
      ]);
    } else {
      dispatch(addBook(bookInfo));
      Alert.alert('Başarılı', 'Kitap eklendi!', [
        { text: 'Tamam', onPress: () => navigation.navigate(pages.HOMEPAGE) }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kitap Adı</Text>
        <TextInput 
          style={styles.input}
          placeholder="Kitap adını giriniz..." 
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Yazar</Text>
        <TextInput 
          style={styles.input}
          placeholder='Yazar adını giriniz...' 
          value={author}
          onChangeText={setAuthor}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tür</Text>
        <TextInput 
          style={styles.input}
          placeholder="Türünü giriniz..." 
          value={genre}
          onChangeText={setGenre}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Yıl</Text>
        <TextInput 
          style={styles.input}
          placeholder="Yayın yılını giriniz..." 
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Resim URL</Text>
        <TextInput 
          style={styles.input}
          placeholder="Resim URL'sini giriniz..." 
          value={image}
          onChangeText={setImage}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>
          {isEdit ? 'Güncelle' : 'Kaydet'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreatePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})