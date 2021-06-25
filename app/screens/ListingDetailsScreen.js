import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>

                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title= "Adeolu Adegbemi"
                        subtitle="5 Listings"
                    />
                </View>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
    },

    detailsContainer: {
        padding: 20,
    },
    
    image: {
        width: '100%',
        height: 300,
    },

    title : {
        fontSize: 24,
        fontWeight: '500',
        
    },

    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },

    userContainer: {
        marginVertical: 40,
    },
})
