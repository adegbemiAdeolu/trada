import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorContainer, useNavigation } from '@react-navigation/native';

import AuthNavigator from './navigation/AuthNavigator';


const App = () => {
    return (
        <NavigatorContainer>
            <AuthNavigator />
        </NavigatorContainer>
    );
};

export default App;
 

