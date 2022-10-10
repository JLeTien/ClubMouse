import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';
import { Constants } from 'expo-constants';
import * as SQLite from "expo-sqlite"
import ProfileScreen from './ProfileScreen';

function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

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
  
    var Data ={
      username: username1,
      password: password1
    };
  
    fetch(InsertAPIURL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
            // If data is in JSON => Display alert msg
   
      if(response[0].Message== "valid") {
        
        navigation.navigate(ProfileScreen);
      }else{
        alert(response[0].Message); 
      }
    
    })
    .catch((error)=>{
      alert("Error Occured" + error);
    })
  //  navigation.navigate(ProfileScreen);
  }

  return (
    <View style={styles.root}>
    <Text>Login</Text>
    <View style={styles.container}>
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
    </View>
      <CustomButton text="Log In" onPress={onSignInPressed}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#302852"
  },
  logo:{
      width: 200,
      height: 300,
  },
  container: {
    backgroundColor:"white",
    width:'90%',
    borderRadius:5,
    borderColor:'#e8e8e8',
    borderWidth:1,
    paddingHorizontal:10,
    marginVertical:5,
    padding:10,
  }
})

export default SignUpScreen