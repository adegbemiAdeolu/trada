import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Screens from '../components/Screens'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },

     {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
]

export default function AccountScreen() {
    return (
        <Screens style={styles.screens}>
            <View style={styles.container}>
                <ListItem 
                    title="Adeolu Adegbemi"
                    subtitle="adegbemiadeolu@gmail.com"
                    image={require("../assets/mosh.jpg")}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor= {item.icon.backgroundColor} />}
                        />)}
                />
            </View>

            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />

        
        </Screens>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    screens: {
        backgroundColor: colors.light,
    },
})
