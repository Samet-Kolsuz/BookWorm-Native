import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../redux/slices/bookSlice'
import pages from '../constants'


const BookDetail = ({ navigation, route }) => {

  useEffect(()=>{
    navigation.setOptions({
      title
    })
  }, [navigation])

  const { id, title, author, image, genre, year } = route.params.item;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(id));
    navigation.goBack();
  };

  const handleEdit = () => {
    navigation.navigate(pages.CREATEPAGE, { 
      book: { id, title, author, image, genre, year },
      isEdit: true 
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.img} resizeMode='cover' />
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems:"center", gap:40, marginBottom: 20 }}>
          <TouchableOpacity style={styles.iconButton1} onPress={handleDelete}>
            <Text style={styles.iconText}>🗑️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton2} onPress={handleEdit}>
            <Text style={styles.iconText}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.field}>
          <Text style={styles.fieldlabel}>Yil:</Text>
          <Text style={styles.fieldValue}>{year}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldlabel}>Yazar:</Text>
          <Text style={styles.fieldValue}>{author}</Text>
        </View>
                <View style={styles.field}>
          <Text style={styles.fieldlabel}>Tur:</Text>
          <Text style={styles.fieldValue}>{genre}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default BookDetail

const styles = StyleSheet.create({
  img: {
    width: "70%",
    height: 250,
    marginVertical: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.4)",
  },
  imgContainer: {
    borderBottomWidth: 10,
    borderBottomColor: "rgba(0,0,0,0.1)",
    alignItems: 'center',

  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  field: {
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'flex-start',
    padding: 30,
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",

  },
  fieldlabel: {
    fontSize: 18,
    fontWeight: '700',
    color: "rgba(0,0,0,0.6)",
    textAlign: 'space-between',
    flex: 1,



  },
  fieldValue: {
    fontSize: 18,
    fontWeight: '400',
    color: "rgba(0,0,0,1)",

  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    
  },
  iconText: {
    fontSize: 24,
  },

})