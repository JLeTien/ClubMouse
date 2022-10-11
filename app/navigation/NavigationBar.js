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
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIconStyle: {
                    alignContent: 'center',
                    bottom: -15
                },
                tabBarStyle: {
                    backgroundColor: '#6577B8',
                    opacity: 0.8,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    position: 'absolute',
                    left: 10,
                    right: 10,
                    bottom: 10,
                    height: 80
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
                            size={size} />
                    );
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen} />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen} />
            <Tab.Screen
                name="Achievements"
                component={AchievementsScreen} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                initialParams={{ Username: "", Age: "" }} />
        </Tab.Navigator>
    )
}


export default NavigationBar