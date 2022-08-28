import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/navigation/StackNavigator';
import NavigationBar from './app/navigation/NavigationBar';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
                   