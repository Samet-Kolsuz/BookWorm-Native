import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const BookDetail = ({ navigation, route }) => {

  useEffect(()=>{
    navigation.setOptions({
      title
    })
  }, [navigation])

  const { id, title, author, image, genre, year } = route.params.item;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.img} resizeMode='cover' />
        <Text style={styles.title}>{title}</Text>
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

})