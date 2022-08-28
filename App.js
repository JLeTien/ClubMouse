import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TouchableWithoutFeedback, TouchableOpacity, 
  SafeAreaView, TouchableHighlight, Button, Alert, Dimensions, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import NavigationBar from './app/NavigationBar';


export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");
  console.log(Dimensions.get("screen"));

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

const ContainerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
                   