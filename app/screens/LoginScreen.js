import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    var username1 = username;
    var password1 = password;

    var InsertAPIURL = "https://deco3801-clubmouse.uqcloud.net/login.php";   //API to render signup

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      username: username1,
      password: password1
    };

    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
        // If data is in JSON => Display alert msg
        if (response[0].Message == "valid") {
          AsyncStorage.setItem('Username', response[0].Username);
          navigation.navigate(NavigationBar);
        } else {
          alert(response[0].Message);
        }
      })
      .catch((error) => {
        alert("Error Occured" + error);
      })
  }

  return (
    <View style={styles.root}>
      <View style={styles.box}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.text}>Sign in to your account</Text>

        <View style={styles.container}>
          <Image style={styles.icon} source={require('../assets/user.png')} />
          <TextInput
            onChangeText={(username) => setUsername(username)}
            placeholder="Username"
            style={styles.input}
            value={username}
          />

        </View>
        <View style={styles.container}>
          <Image style={styles.icon} source={require('../assets/lock.png')} />
          <TextInput
            onChangeText={(password) => setPassword(password)}
            placeholder="Password"
            style={styles.input}
            value={password}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button onPress={onSignInPressed} title="LOGIN" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E1F56"
  },
  box: {
    display: "flex",
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1.2,
    shadowRadius: 3,
  },
  logo: {
    width: 200,
    height: 300,
  },
  title: {
    color: "white",
  },
  text: {
    color: "white",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: '90%',
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    bottom: 250,
    margin: 10,
    width: 200,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 40,
  },
  icon: {
    marginRight: "2%",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
  }
})

export default SignUpScreen