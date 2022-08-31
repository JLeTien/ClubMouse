import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import CalendarScreen from '../screens/CalendarScreen';
import HomeScreen from '../screens/HomeScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

const Tab = createBottomTabNavigator();

// This is the set up for the basic components for the navigation bar
const NavigationBar = () => {
    return (
        <Tab.Navigator 
            initialRouteName="NavigationBar"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'black'
                },
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Home: 'home',
                        Calendar: 'calendar',
                        Achievements: 'award',
                        Profile: 'user'
                    }
                    return (
                        <Feather 
                        name={icons[route.name]} 
                        color={color} 
                        size={size}/>
                    );
                },
            })}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}/>
            <Tab.Screen 
                name="Calendar" 
                component={CalendarScreen}/>
            <Tab.Screen 
                name="Achievements" 
                component={AchievementsScreen}/>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                initialParams={{Username:"defaultuser",Age:"99999"}}/>
        </Tab.Navigator>
    )
}


export default NavigationBar