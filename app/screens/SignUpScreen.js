import React, { useState,useEffect  } from 'react';
import { StyleSheet, View, Image, Text, Button, Alert, SafeAreaView,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';



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

  var Data ={
    username: username1,
    password: password1,
    email: email1
  };

  fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
  })
  .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  .then((response)=>{
    alert(response[0].Message);       // If data is in JSON => Display alert msg
  })
  .catch((error)=>{
    alert("Error Occured" + error);
  })


  navigation.navigate(LoginScreen);
}
return (
  <View style={styles.root}>
    <Text style={styles.text}> Sign up</Text>
    <View style={styles.container}>
      <TextInput
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        style={styles.input}
        value={username}
      />
    </View>
    <View style={styles.container}>
      <TextInput
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        style={styles.input}
        value={password}
      />
    </View>
    <View style={styles.container}>
      <TextInput
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        style={styles.input}
        value={email}
      />
    </View>

    <View style={styles.pictureContainer}>
      <Image style={styles.logo} source={require('../assets/Girl.png')}/>
    </View>
      <CustomButton text="Signup" onPress={() => navigation.navigate(NavigationBar)}/>
  </View>
  )
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: "white",
      bottom: 20,
    },
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
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 200/2,
      borderColor: 'white',
      borderWidth: 3,
      justifyContent: "flex-start"
  },
})

export default LoginScreen