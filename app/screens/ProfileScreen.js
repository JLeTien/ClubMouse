import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CurrentRenderContext, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// 
const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();

    const { Username = "Name" } = route.params;
    const { Age = "Age" } = route.params;

    const [getUsername, setGetValue] = useState('');

    // Function to get the value from AsyncStorage
    AsyncStorage.getItem('Username').then(
        (value) =>
            // AsyncStorage returns a promise
            // Adding a callback to get the value
            setGetValue(value),
        // Setting the value in Text
    );

    return (
        <ScrollView style={styles.background}>
            {/* user container */}
            <View style={styles.userContainer}>
                <Image style={styles.logo} source={require('../assets/Girl.png')} />
                <View style={styles.infoContainer}>
                    <Text style={styles.userText}>Baek Ye-rin{getUsername}</Text>
                    {/* <Text style={styles.userText}>{Age}</Text> */}
                </View>
            </View>
            {/* level container
            <View style={styles.levelContainer}>
                <Text style={styles.levelText}>Level 1</Text>
                <Image style={styles.xp} source={require('../assets/xpBar.png')}/>
            </View> */}

            {/* stats container */}
            <View style={styles.statsContainer}>
                <Text style={styles.userText}>Longest Streak: 10</Text>
                <Text style={styles.userText}>Total Sleeps: 100</Text>
            </View>

            {/* showcase container */}
            <View style={styles.showcaseContainer}>
                <Text style={styles.showcaseText}>Badges Showcase</Text>
                {/* container to hold the badges */}
                <View style={styles.bigBadgesContainer}>
                    {/* badge 1 */}
                    <View style={styles.badgesContainer}>
                        <Image style={styles.badges} source={require('../assets/GoldMedal.png')} />
                    </View>
                    {/* badge 2 */}
                    <View style={styles.badgesContainer}>
                        <Image style={styles.badges} source={require('../assets/GoldMedal.png')} />
                    </View>
                    {/* badge 3 */}
                    <View style={styles.badgesContainer}>
                        <Image style={styles.badges} source={require('../assets/GoldMedal.png')} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // Deals with the background
    background: {
        flex: 1,
        backgroundColor: "#2E1F56",
    },

    // User Details
    userContainer: {
        //borderColor: 'black',
        //borderWidth: 3,
        borderRadius: 30,
        margin: 30,
        top: 50,
        backgroundColor: "#BEF0C3",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        backgroundColor: '#2E1F56',
        borderRadius: 200 / 2,
        borderColor: 'black',
        borderWidth: 2,
    },
    // For text in user container
    infoContainer: {
        flexDirection: "column"
    },
    userText: {
        fontSize: 22,
        // color: "white",
        alignContent: 'flex-end'
    },
    // Level
    levelContainer: {
        flex: 0.3,
        margin: 30,
        borderColor: "white",
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    levelText: {
        fontSize: 20,
        color: "white"
    },


    // Container for stats
    statsContainer: {
        borderRadius: 30,
        margin: 30,
        backgroundColor: '#BEF0C3',
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    // Showcase of badges
    showcaseContainer: {
        backgroundColor: '#BEF0C3',
        borderRadius: 30,
        //borderColor: "white",
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
    },
    showcaseText: {
        fontSize: 20,
        color: "black",
        textAlign: 'center'
    },
    bigBadgesContainer: {

        flex: 1,
        flexDirection: 'row',

    },
    badgesContainer: {
        width: '33.333%',
        borderWidth: 1
    },
    badges: {
        width: 90,
        height: 90,
        left: 2,
        margin: 5,
    },

})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen