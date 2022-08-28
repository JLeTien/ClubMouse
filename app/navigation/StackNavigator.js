import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LoginScreen from '../screens/LoginScreen';
import NavigationBar from './NavigationBar';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Group>
            <Stack.Screen name="WelcomeScreen" component = {WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component = {LoginScreen} />
            <Stack.Screen name="SignUpScreen" component = {SignUpScreen} />
            <Stack.Screen name="NavigationBar" 
            component = {NavigationBar}
            options={{ headerShown: false}} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
