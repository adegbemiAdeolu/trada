import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../app/screens/WelcomeScreen'
import LoginScreens from '../app/screens/LoginScreens';
import RegisterScreen from '../app/screens/RegisterScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreens} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;