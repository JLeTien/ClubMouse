import React from 'react';
import { 
    ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const login = () => Alert.alert("Login")
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/Galaxy.png")}
        >
            <SafeAreaView style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/Rose.jpg')}/>
                <Text style={styles.text}> Hyoon Enjoyer </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("HomeScreen")} title="Home!!!!" color="pink"/>
                <Button title="Login" color="pink" style={styles.loginButton}
                onPress={login}/>
                <Button onPress={() => navigation.navigate("SignUpScreen")} title="sign up"/>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width:"100%",
        height: 70,
        backgroundColor: "white",
        color:"white"
    },
    registerButton: {
        alignSelf: 'stretch',
        textAlign: 'center',
        width:"100%",
        backgroundColor: "white",
    },
    logo: {
        width: 400,
        height: 400,
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: "center",
    },
    text: {
        color: "white",
    },
    buttonContainer: {
        bottom: 50,
    }

})



export default WelcomeScreen;