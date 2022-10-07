import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';
import { Constants } from 'expo-constants';
import * as SQLite from "expo-sqlite"

function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onSignInPressed = () => {
    console.warn("Signed Upppppp LETSSSS GOOO");
  }


  return (
    <SafeAreaView style={styles.root}>
      <Text>Login</Text>
      <SafeAreaView style={styles.container}>
        <TextInput
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          style={styles.input}
          value={username}
        />
        <TextInput
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          style={styles.input}
          value={password}
        />
      </SafeAreaView>
      <CustomButton text="Log In" onPress={onSignInPressed} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#302852"
  },
  logo: {
    width: 200,
    height: 200,
  }
})

export default SignUpScreen