import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={styles.background}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/Logo.png')} />
            <Image style={styles.logo} source={require('../assets/Saturn.png')} />
                <Text style={styles.heading}> Welcome to Plan-it </Text>
                <Text style={styles.body}> This app allows you to plan your schedule and
                    monitor your sleep for a healthy brain. </Text>
            </View>


            <Button onPress={() => navigation.navigate("LoginScreen")} title="LOGIN" color="white" />
            <Button onPress={() => navigation.navigate("SignUpScreen")} title="SIGN UP" color="white" />
            {/* <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("LoginScreen")} title="LOGIN" color="white" />
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("SignUpScreen")} title="SIGN UP" color="white" />
            </View> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#2E1F56"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 30,
        alignItems: "center",
        borderColor: "white",
        flex: 0.7,
        padding: 30,
    },
    heading: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    body: {
        color: "white",
        fontSize: 15,
        padding: 20,
        textAlign: "center"
    },
    buttonContainer: {
        bottom: 30,
        margin: 10,
        width: 350,
        flexDirection: "column",
        backgroundColor: "#6577B8",
        borderRadius: 40,
        height: 60,
        justifyContent: "center"
    },
    buttonText: {
        color: "black",
    }

})

export default WelcomeScreen;