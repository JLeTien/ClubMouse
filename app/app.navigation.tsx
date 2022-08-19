import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login">
            <Screen name="Welcome" component={WelcomeScreen}></Screen>
            <Screen name="Home" component={HomeScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;
