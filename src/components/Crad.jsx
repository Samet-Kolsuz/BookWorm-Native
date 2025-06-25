import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import pages from "../constants";
import BookDetail from "../screens/BookDetail";

const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
        <View style={styles.imagecontainer}>
            <Image source={{ uri: item.image }} style={styles.img} />
        </View>
        <Text style={styles.carditem}>{item.title}</Text>
        <Text style={styles.cardSubditem}>{item.year}</Text>

    </TouchableOpacity>
    )

export default renderCard;

const styles = StyleSheet.create({
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