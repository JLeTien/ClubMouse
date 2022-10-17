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

            <Image style={styles.saturn} source={require('../assets/Saturn.png')} />
            <Image style={styles.purpleplanet} source={require('../assets/PurplePlanet.png')} />

            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("LoginScreen")} title="LOGIN" color="white" />
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("SignUpScreen")} title="SIGN UP" color="white" />
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
        top: innerHeight / 3,
        right: innerWidth / 2.5,
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
        flex: 0.7,
        padding: 30,
    },
    button: {
        top: 100,
    },
    heading: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    body: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
        padding: 20,
        textAlign: "center"
    },
    buttonContainer: {
        bottom: 0,
        margin: 10,
        width: 300,
        flexDirection: "column",
        backgroundColor: "#6577B8",
        borderRadius: 40,
        height: 50,
        justifyContent: "center"
    },
    buttonText: {
        color: "black",
    }

})

export default WelcomeScreen;