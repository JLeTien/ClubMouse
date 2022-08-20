import React from 'react';
import { 
    ImageBackground, StyleSheet, View, Image, Text, Button, Alert
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
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/Rose.jpg')}/>
                <Text style={styles.text}> SLEEP SLEEP SLEEP </Text>
            </View>
            {/* <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View> */}
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("HomeScreen")} title="Home!!!!" color="pink"/>
                <Button title="Login" color="pink" style={styles.loginButton}
                onPress={login}/>
                <Button title="Register" color="pink" style={styles.registerButton}/>
            </View>
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
        width:"100%",
        height: 70,
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
        alignItems: "center",
        bottom: 50,
    }

})



export default WelcomeScreen;