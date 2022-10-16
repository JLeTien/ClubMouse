import { AppRegistry, View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CurrentRenderContext, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// 
const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();


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
            <Text style={styles.heading}>{getUsername}</Text>
            {/* user container */}
            <View style={styles.userContainer}>
                <Image style={styles.logo} source={require('../assets/Girl.png')} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{getUsername}</Text>
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
                {/* container to hold the badges */}
                <View style={styles.bigBadgesContainer}>
                    {/* badge 1 */}
                    <View style={styles.badgesContainer}>
                        <Text style={styles.badgeTitle}>Sleeps</Text>
                        <Image style={styles.badges} source={require('../assets/GoldMedal.png')} />
                        <Text style={styles.badgeText}>Log 100/100 sleeps</Text>
                    </View>
                    {/* badge 2 */}
                    <View style={styles.badgesContainer}>
                        <Text style={styles.badgeTitle}>Spawns</Text>
                        <Image style={styles.badges} source={require('../assets/SilverMedal.png')} />
                        <Text style={styles.badgeText}>Spawn 7/20 mobs</Text>
                    </View>
                    {/* badge 3 */}
                    <View style={styles.badgesContainer}>
                        <Text style={styles.badgeTitle}>Streaks</Text>
                        <Image style={styles.badges} source={require('../assets/BronzeMedal.png')} />
                        <Text style={styles.badgeText}>Log 7/10 sleeps in a row</Text>
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

    heading: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        paddingTop: 50,
    },

    name: {
        fontSize: 25,
        color: "#2E1F56",
        fontWeight: "bold",
        color: "white",
    },

    // User Details
    userContainer: {
        borderRadius: 30,
        margin: 30,
        marginTop: 10,
        paddingTop: 10,
        backgroundColor: "#4a338a",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        backgroundColor: '#2E1F56',
        borderRadius: 200 / 2,
        borderColor: '#2E1F56',
        borderWidth: 2,
    },
    // For text in user container
    infoContainer: {
        flexDirection: "column"
    },
    userText: {
        fontSize: 20,
        color: "white",
        alignContent: 'flex-end'
    },
    badgeTitle: {
        borderBottomWidth: 1,
        color: "white",
        fontSize: 20,
        alignContent: 'flex-end'
    },
    badgeText: {
        fontSize: 16,
        left: 5,
        color: "white",
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
        backgroundColor: '#4a338a',
        marginTop: 0,
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },

    // Showcase of badges
    showcaseContainer: {
        backgroundColor: '#4a338a',
        borderRadius: 30,
        borderColor: "white",
        borderWidth: 0,
        marginLeft: 30,
        marginRight: 30,
    },
    showcaseText: {
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    },
    bigBadgesContainer: {
        flex: 1,
        flexDirection: 'row',

    },
    badgesContainer: {
        width: '33.333%',

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