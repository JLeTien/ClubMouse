import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/HomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import Modal from './app/screens/Modal';
import SignUpScreen from './app/screens/SignUpScreen';
import CalendarScreen from './app/screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Group>
            <Stack.Screen name="WelcomeScreen" component = {WelcomeScreen} />
            <Stack.Screen name="HomeScreen" component = {HomeScreen} />
            <Stack.Screen name="ProfileScreen" component = {ProfileScreen} />
            <Stack.Screen name="SignUpScreen" component = {SignUpScreen} />
            <Stack.Screen name="CalendarScreen" component = {CalendarScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Modal" component = {Modal} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
