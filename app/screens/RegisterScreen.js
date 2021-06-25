import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screens from '../components/Screens'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password'),
})

export default function RegisterScreen() {
    return (
        <Screens style={styles.container}>
            

            <AppForm 
                initialValues={{ name: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account-circle"
                    keyboardType="email-address"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <SubmitButton title="Register" />
            </AppForm>
        </Screens>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})
