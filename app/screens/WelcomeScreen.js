import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/Space.png")}
        >
            <View style={styles.loginButton}></View>
            <View style={styles.RegisterButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton: {
        width:"100%",
        height: 70,
        backgroundColor: "#302852",
    },
    registerButton: {
        width:"100%",
        height: 70,
        backgroundColor: "#302852",
    }
})

export default WelcomeScreen;