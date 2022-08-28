import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import LoginScreen from './app/screens/LoginScreen';
import NavigationBar from './app/NavigationBar';

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
