import React from 'react';
import { 
    ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={styles.background}
        >
            <SafeAreaView style={styles.logoContainer}>
                <Text style={styles.text}> Welcome to Plan-it </Text>
                <Text style={styles.text}> This app allows you to plan your schedule and 
                    monitor your sleep for a healthy brain. </Text>
                <Image style={styles.logo} source={require('../assets/sleeping.png')}/>
            </SafeAreaView>

            <SafeAreaView style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate(NavigationBar)} title="Home!!!!" color="pink"/>
                <Button onPress={() => navigation.navigate("LoginScreen")} title="Login"/>
                <Button onPress={() => navigation.navigate("SignUpScreen")} title="sign up"/>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#302852"
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
        width: 300,
        height: 300,
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