import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView} from 'react-native';
import Logo from "../assets/yeji.jpg"
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
const [Username, setUsername]=useState('');
const [Password, setPassword]=useState('');
const [Age, setAge]=useState('');
const [sucesss, setSuccess]=useState('false');
const navigation = useNavigation();
const onSignInPressed = () => {
  console.warn({Username});
}
return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} />
      <CustomInput placeholder="Username" value={Username} setValue={setUsername}/>
      <CustomInput placeholder="Password" value={Password} setValue={setPassword} secureTextEntry={true}/>
      <CustomInput placeholder="Age" value={Age} setValue={setAge}/>
      <CustomButton text="Log In" onPress={() => navigation.navigate("ProfileScreen",{Username,Age})} />
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: "center",
        paddingTop:"25%",
        
        
    },
    logo:{
        width: 200,
        height: 300,
    }
})

export default LoginScreen