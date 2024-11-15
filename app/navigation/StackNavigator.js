import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NavigationBar from './NavigationBar';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Group>
            <Stack.Screen name="WelcomeScreen" component = {WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component = {LoginScreen} />
            <Stack.Screen name="SignUpScreen" component = {SignUpScreen} />
            <Stack.Screen name="ProfileScreen" component = {ProfileScreen} initialParams={{Username:"defaultuser",Age:"99999"}}/>
            <Stack.Screen name="NavigationBar"  
            component = {NavigationBar}
            options={{ headerShown: false}}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
