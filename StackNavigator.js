import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/HomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import CalendarScreen from './app/screens/CalendarScreen';
import LoginScreen from './app/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Group>
            <Stack.Screen name="WelcomeScreen" component = {WelcomeScreen} />
            <Stack.Screen name="HomeScreen" component = {HomeScreen} />
            <Stack.Screen name="SignUpScreen" component = {SignUpScreen} />
            <Stack.Screen name="LoginScreen" component = {LoginScreen} />
            <Stack.Screen name="CalendarScreen" component = {CalendarScreen} />
            <Stack.Screen name="ProfileScreen" component = {ProfileScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
