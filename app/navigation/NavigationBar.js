import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

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
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'black'
                }
              }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Calendar" component={CalendarScreen}/>
            <Tab.Screen name="Achievements" component={AchievementsScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{Username:"defaultuser",Age:"99999"}}/>
        </Tab.Navigator>
    )
}


export default NavigationBar