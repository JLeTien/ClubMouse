import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';
import moment from 'moment';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };
    return (
        //<SafeAreaView style={styles.background}>

        <ImageBackground source={require('../assets/Space.jpg')} style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
        }}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/LogoWhite.png')} />
                <Text style={styles.heading}> Welcome to Plan-it </Text>
                <Text style={styles.body}> This app allows you to plan your schedule and
                    monitor your sleep for a healthy brain. </Text>
            </View>

            <View style={{ flex: 0.6 }}>
                <Image style={styles.saturn} source={require('../assets/Saturn.png')} />
                <Image style={styles.purpleplanet} source={require('../assets/PurplePlanet.png')} />
            </View>

            <View style={{ flex: 0.1 }}>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => navigation.navigate("LoginScreen")} title="Login" color="white" />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => navigation.navigate("SignUpScreen")} title="Register" color="white" />
                </View>
            </View>
        </ImageBackground>
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
        width: innerWidth,
        height: innerHeight / 3,
    },
    saturn: {
        zIndex: 1,
        top: innerHeight / 2.5,
        right: innerWidth / 4,
        width: innerWidth / 2,
        height: innerHeight / 4,

    },
    purpleplanet: {
        zIndex: 1,
        bottom: innerHeight / 15,
        left: innerWidth / 3,
        width: innerWidth / 1.5,
        height: innerHeight / 4,
    },
    logoContainer: {
        zIndex: 2,
        position: 'absolute',
        top: 30,
        alignItems: "center",
        borderColor: "white",
        flex: 1,
        padding: 30,
    },
    button: {
        top: 100,
    },
    heading: {
        color: "white",
        fontFamily: "HelveticaNeue-Light",
        fontSize: 35,
        top: 40
    },
    body: {
        fontFamily: "HelveticaNeue-Light",
        color: "white",
        fontSize: 15,
        padding: 20,
        textAlign: "center",
        top: 40
    },
    buttonContainer: {
        bottom: 0,
        margin: 10,
        width: 325,
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        borderRadius: 20,
        padding: 10,
        fontFamily: "HelveticaNeue-Light",
        fontSize: 10
    },
    buttonText: {
        color: "black",
    }

})

export default WelcomeScreen;