import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius={4}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo-red.png")} 
                    style={styles.logo}
                />

                <Text style={styles.tagline}>Sell Fast. Buy Cheap</Text>
            </View>
                
            <View style={styles.buttonsContainer}>
                <AppButton title={'Login'} onPress={() => navigation.navigate('Login')}></AppButton>

                <AppButton title={'Register'} color='secondary' onPress={() => navigation.navigate('Register')}></AppButton>
            </View>

            

            
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },

    logo: {
        width: 100,
        height: 100,
        
    },

    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },

    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },

})
