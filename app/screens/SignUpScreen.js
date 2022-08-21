import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView} from 'react-native';
import Logo from "../assets/yeji.jpg"
import CustomInput from '../../CustomInput';
const SignUpScreen = () => {
  return (
    <View style={styles.root}>
        <Image source={Logo} style={styles.logo} />
        <CustomInput/>
        <CustomInput/>
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