import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CreatePage = () => {



  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text>isim</Text>
        <TextInput placeholder="Isim Giriniz..." > </TextInput>
      </View>

      <View>
        <Text>Tur</Text>
        <TextInput placeholder='Tur Giriniz...' > </TextInput>
      </View>

      <View>
        <Text>Yil</Text>
        <TextInput placeholder="Yil Giriniz..." > </TextInput>
      </View>

      <View>
        <Text>Yazar</Text>
        <TextInput placeholder="Yazar Giriniz..." > </TextInput>
      </View>

    </View>
  )
}

export default CreatePage

const styles = StyleSheet.create({})