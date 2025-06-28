import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Crad';
import pages from '../constants';

const HomePage = ({ navigation }) => {
  const books = useSelector((state) => state.books);
  const {CREATEPAGE}= pages;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Ana Sayfa',
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('CREATEPAGE')}>
          <Text style={{ color: "white" }}>Yeni Kitap Ekle</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={books}
          renderItem={({item})=> <Card item={item}/>}
          contentContainerStyle={styles.cardcontainer}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgb(150,150,255)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
  cardcontainer: {
    padding: 10,
  },
  imagecontainer: {
    width: "100%",
  },
  img: {
    width: '90%',
    height: 170,
    borderRadius: 8,
  },
  carditem: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  cardSubditem: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
  }
})