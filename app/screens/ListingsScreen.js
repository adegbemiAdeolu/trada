import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screens from '../components/Screens'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require('../assets/jacket.jpg')
    },

     {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]
export default function ListingsScreen() {
    return (
        <Screens style={styles.screens}>
            <FlatList
                data={listings} 
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item}) => (
                    <Card
                        title={item.title} 
                        subtitle={"$" + item.price}
                        image={item.image}
                    />
                )}
            />
        </Screens>
    )
}

const styles = StyleSheet.create({
    screens: {
        padding: 20,
        backgroundColor: colors.light
    },
})
