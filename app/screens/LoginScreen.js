import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
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
      .then(async (response) => {
        // If data is in JSON => Display alert msg
        if (response[0].Message == "valid") {
          try {
            await AsyncStorage.setItem('Username', response[0].Username);
          } catch (e) {
            alert('Failed to save username');
          }
          setUsername(response[0].Username);
          navigation.navigate("NavigationBar");
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
        <View style={styles.box}>
        <Image style={styles.logo} source={require('../assets/LogoWhite.png')} />

          <View style={styles.container}>
            <TextInput
              onChangeText={(username) => setUsername(username)}
              placeholderTextColor = "grey"
              placeholder="Username"
              selectionColor="green"
              style={styles.input}
              value={username}
            />
            <Image style={styles.icon} source={require('../assets/user.png')} />
          </View>
          
          <View style={styles.container}>
            <TextInput
              onChangeText={(password) => setPassword(password)}
              placeholderTextColor = "grey"
              placeholder="Password"
              selectionColor="green"
              style={styles.input}
              value={password}
              secureTextEntry
            />
            <Image style={styles.icon} source={require('../assets/lock.png')} />
          </View>
        </View>
        <View style={styles.button}>
          <Button 
            onPress={onSignInPressed} 
            color="white"
            title="Login" />
        </View>
      </View>
      <Text style = {styles.text}>Forgot your Password</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: innerWidth/1.25,
    height: innerHeight/5,
    justifyContent: "center",
    alignItems: "center",
    bottom: 100
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
    color: "white",
    textDecorationLine: "underline",
    justifyContent: "center",
    alignItems: "center",
    bottom: 230,
    fontSize: 14,
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
    bottom: 80
  },
  button: {
    bottom: 200,
    margin: 10,
    width: 325,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 20,
    padding: 10,
    fontFamily: "HelveticaNeue-Light",
    fontSize: 10
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

export default SignUpScreen