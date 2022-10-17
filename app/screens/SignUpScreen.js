import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [forceUpdate, forceUpdateId] = useForceUpdate();

  const onSignInPressed = () => {
    var username1 = username;
    var password1 = password;
    var email1 = email;

    var InsertAPIURL = "https://deco3801-clubmouse.uqcloud.net/signup.php";   //API to render signup

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      username: username1,
      password: password1,
      email: email1
    };

    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
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
      <Image style={styles.logo} source={require('../assets/LogoWhite.png')} />
      <Text style={styles.title}>SIGN UP</Text>
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
        />
      </View>
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/mail.png')} />

        <TextInput
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          style={styles.input}
          value={email}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onSignInPressed} title="SIGN UP" />
      </View>
    </View>
  )
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  logo: {
    width: innerWidth,
    height: innerHeight / 3,
},
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E1F56"
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
  input: {
    backgroundColor: "white",
    width: "80%",

  },
  icon: {
    marginRight: "2%",
  },
  buttonContainer: {
    bottom: 10,
    margin: 10,
    width: 200,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 40,
  },
})

export default LoginScreen