import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

// 
const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    // const { Username = "Name"} = route.params;
    // const { Age = "Age"} = route.params;
    return (
        // Background Image
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >

            {/* Title */}
            <View style={styles.profileContainer}>
                <Text style={styles.title}>Profile</Text>

            </View>
            
            {/* Avatar Logo*/}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/Hyoon.jpg')}/>
            </View>

            {/* User Details */}
            <View style={styles.userContainer}>
                <Text style={styles.userText}>Name: {/* {Username} */}</Text>
                <Text style={styles.userText}>Id: 123123123</Text>
            </View>

            {/* Level */}
            <View style={styles.levelContainer}>
                <Text style={styles.levelText}>Level 1</Text>
                {/* <Image style={styles.xp} source={require('../assets/xpBar.png')}/> */}
            </View>
        </ImageBackground>

        
    )
}

const styles = StyleSheet.create({
    // Deels with the background
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    // Title
    profileContainer: {
        // flex: 1,
        // justifyContent: "center",
        margin: 10,
        top: 75,
        // borderColor: "white",
        // borderWidth: 1,
        // backgroundColor: "black"
    },
    title: {
        fontSize: 40,
        color: "white",
        margin: 10,
        fontWeight: "bold"
    },

    // Logo
    logoContainer: {
        // flex: 0,
        top: 75,

    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: "flex-start"
    },

    // User Details
    userContainer: {
        justifyContent: "center",
        borderRadius: 40,
        width: 300,
        height: 75,
        top: 95,
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "#5d34a5",
        alignItems: "center"
    },
    userText: {
        fontSize: 20,
        color: "white"

    },

    // Level
    levelContainer: {
        justifyContent: "center",
        borderRadius: 40,
        width: 300,
        height: 50,
        top: 105,
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "#5d34a5",
        alignItems: "center"
    },
    levelText: {
        fontSize: 20,
        color: "white",
    },
    xp: {
        // width: 300,
        // height: 50,
        resizeMode: 4,
        // justifyContent: "flex-start",
    }
})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen