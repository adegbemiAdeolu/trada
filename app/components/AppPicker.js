import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screens from './Screens'
import PickerItem from './PickerItem'

export default function AppPicker({ icon, items, numberOfColumns = 1, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width = '100%' }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}

                { selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                
                <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide">
                <Screens>
                    <Button title="Close" onPress={() => setModalVisible(false)} />

                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item} 
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }} 
                            />
                        )}
                    />
                </Screens>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginRight: 10,
    },

    placeholder: {
        flex: 1,
        color: colors.medium,
    },

    text: {
        flex: 1,
        
    },
    
})
