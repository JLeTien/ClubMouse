import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("App executed");



  return (
    <View style={styles.container}>
      <Text>
        Suck my ass
      </Text>
      <Image
          style={{width: 150, height: 150}}
          source={require('./assets/Geun.jpg')}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
                   