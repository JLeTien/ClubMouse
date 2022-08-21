import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView} from 'react-native';
import Logo from "../assets/yeji.jpg"
import CustomInput from '../../CustomInput';
const SignUpScreen = () => {
  const [Username, setUsername]=useState('');
  const [Password, setPassword]=useState('');
  return (
    <View style={styles.root}>
        <Image source={Logo} style={styles.logo} />
        <CustomInput placeholder="Username" value={Username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={Password} setValue={setPassword} secureTextEntry={true}/>
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

export default SignUpScreen