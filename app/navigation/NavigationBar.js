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
            screenOptions={{
                showIcon: true,
                showLabel: true,
                lazyLoad: true,
                activeTintColor: 'purple',
                inactiveTintColor: 'white',
                activeBackgroundColor: '#6577B8',
                inactiveBackgroundColor: '#6577B8',
                style: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    position: 'absolute',
                    left: 50,
                    right: 50,
                    bottom: 20,
                    height: 100
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