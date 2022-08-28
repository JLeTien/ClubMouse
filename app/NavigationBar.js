import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import ProfileScreen from './screens/ProfileScreen';
import CalendarScreen from './screens/CalendarScreen';
import HomeScreen from './screens/HomeScreen';
import AchievementsScreen from './screens/AchievementsScreen';

const Tab = createBottomTabNavigator();

// This is the set up for the basic components for the navigation bar
const NavigationBar = () => {
    return (
        <Tab.Navigator>
<<<<<<< HEAD
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Calendar" component={CalendarScreen}/>
            <Tab.Screen name="Achievements" component={AchievementsScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
=======
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="CalendarScreen" component={CalendarScreen}/>
            <Tab.Screen name="AchievementsScreen" component={AchievementsScreen}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
>>>>>>> 4f98f8bf417c8096cfdf7ede8d892e7058ff5cb1
        </Tab.Navigator>
    )

}

export default NavigationBar