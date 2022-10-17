import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput } from 'react-native';
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
    <ImageBackground source={require('../assets/Space.jpg')} style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    }}>
      <View style={styles.root}>
        <Image style={styles.logo} source={require('../assets/LogoWhite.png')} />
        <View style={styles.container}>
          <TextInput
            onChangeText={(username) => setUsername(username)}
            placeholder="Username"
            style={styles.input}
            value={username}
          />
          <Image style={styles.icon} source={require('../assets/user.png')} />
        </View>
        <View style={styles.container}>
          <TextInput
            onChangeText={(password) => setPassword(password)}
            placeholder="Password"
            style={styles.input}
            value={password}
          />
          <Image style={styles.icon} source={require('../assets/lock.png')} />
        </View>
        <View style={styles.container}>
          <TextInput
            onChangeText={(email) => setEmail(email)}
            placeholder="Email"
            style={styles.input}
            value={email}
          />
          <Image style={styles.icon} source={require('../assets/mail.png')} />
        </View>

        <View style={styles.button}>
          <Button 
            onPress={onSignInPressed} 
            color="white"
            title="Register" />
        </View>
        <Text style={styles.text}>By signing up, you are indicating 
        that you have read and agree to the Terms of Service 
        and Privacy Policy.</Text>
      </View>
    </ImageBackground>
  )
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  logo: {
    width: innerWidth/1.25,
    height: innerHeight/5,
    justifyContent: "center",
    alignItems: "center",
    bottom: 60
},
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    textAlign: "center",
    color: "white",
    width: 280,
    top: 30,
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Light'
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    width: '90%',
    borderRadius: 5,
    borderColor: "grey",
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    bottom: 30
  },
  button: {
    top: 15,
    margin: 10,
    width: 325,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 20,
    padding: 10,
  },
  icon: {
    width: innerWidth/16,
    height: innerHeight/32,
    top: 10,
  },
  input: {
    backgroundColor: "transparent",
    width: "100%",
    padding: 10,
    fontSize: 25,
    fontFamily: "HelveticaNeue-Light",
    color: "white"
  }
})
export default LoginScreen