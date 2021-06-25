import React, { useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView 
                ref={scrollView} 
                horizontal 
                onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map(uri => (
                        <View key={uri} style={styles.image}>
                            <ImageInput 
                                imageUri={uri} 
                                key={uri} 
                                onChangeImage={() => onRemoveImage(uri)} 
                            />
                        </View>
                    ))}

                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    image: {
        marginRight: 10,
    }
})
