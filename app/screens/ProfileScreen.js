import { ImageBackground, AppRegistry, View, Text, StyleSheet, Image, ScrollView } from 'react-native'
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
        <ImageBackground source={require('../assets/Space.jpg')} style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
        }}>
        <ScrollView style={styles.background}>
            <Text style={styles.heading}>Profile</Text>
            <Image style = {styles.settings} source = {require('../assets/settings.png')} />
            {/* user container */}
            <View style={styles.userContainer}>
                <Image style={styles.logo} source={require('../assets/Girl.png')} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{getUsername}</Text>
                </View>
            </View>
            {/* stats container */}
            <View style={styles.statsContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.number}>10</Text>
                    <Text style={styles.userText}>Longest Streak</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.innerContainer}>
                    <Text style={styles.number}>100</Text>
                    <Text style={styles.userText}>Total Sleeps</Text>
                </View>
            </View>
            

            {/* showcase container */}
            <View style={styles.showcaseContainer}>
                <View style={styles.topContainer}>
                    <Text style = {styles.badgesText}>Badge Showcase</Text>
                </View>
                
                <View style={styles.bigBadgesContainer}>
                    {/* badge 1 */}
                    <View style={styles.badgesContainer}>
                        <Text style={styles.badgeTitle}>Sleeps</Text>
                        <Image style={styles.badges} source={require('../assets/GoldMedal.png')} />
                        {/* <Text style={styles.badgeText}>Log 100 sleeps</Text> */}
                    </View>
                    {/* badge 2 */}
                    <View style={styles.badgesContainer}>
                        <Text style={styles.badgeTitle}>Spawns</Text>
                        <Image style={styles.badges} source={require('../assets/SilverMedal.png')} />
                        {/* <Text style={styles.badgeText}>Unlock 5 sprites</Text> */}
                    </View>
                    {/* badge 3 */}
                    <View style={styles.badgesContainer}>
                        <Text style={styles.badgeTitle}>Streaks</Text>
                        <Image style={styles.badges} source={require('../assets/BronzeMedal.png')} />
                        {/* <Text style={styles.badgeText}>Log a 7 sleep streak</Text> */}
                    </View>
                </View>
            </View>
        </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    // Deals with the background
    background: {
        flex: 1,
    },
    heading: {
        textAlign: "center",
        fontSize: 28,
        color: "white",
        paddingTop: 75,
        fontFamily: 'HelveticaNeue-Light',
    },

    // User Details
    userContainer: {
        borderRadius: 30,
        margin: 0,
        marginTop: 10,
        paddingTop: 10,
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
    },
    logo: {
        backgroundColor: 'white',
        borderRadius: 200 / 2,
        borderColor: 'white',
        borderWidth: 2,
    },
    infoContainer: {
        fontFamily: 'HelveticaNeue-Light',
        flexDirection: 'row'
    },
    name: {
        fontSize: 32,
        fontFamily: 'HelveticaNeue-Light',
        color: "white",
        padding: 20,
        textAlign: "center",
    },

    // Container for stats
    statsContainer: {
        backgroundColor: '#4A338A',
        marginTop: 0,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:'center',
        borderRadius: 50,
        marginBottom:10,
        margin:30,
    },
    innerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    number: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 32,
        color:"white",
        flexWrap: 'wrap',
        flex: 1,
    },
    userText: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 14,
        color: "white",
        alignContent: 'flex-end',
        flexWrap: 'wrap',
        flex: 1,
    },
    line: {
        height: 60,
        borderLeftWidth: 1,
        borderColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    //container for badge showcase
    showcaseContainer: {
        backgroundColor: '#4A338A',
        borderWidth: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems:'center',
        borderRadius: 50,
        margin:20,
    },
    topContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center',
        backgroundColor:'#7b61c2',
        borderRadius: 10,
        marginTop: 20,
        width: 250,
    },
    badgesText: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 24,
        padding: 10,
        color: "white",
        alignContent: 'flex-end'
    },
    bigBadgesContainer: {
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    badgesContainer: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#7b61c2',
        borderRadius: 20,
        margin: 5,
        padding:5,
        width: 100,
    },
    badgeTitle: {
        fontFamily: 'HelveticaNeue-Light',
        borderBottomWidth: 1,
        color: "white",
        fontSize: 20,
        alignContent: 'flex-end'
    },
    badgeText: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
        left: 5,
        color: "white",
        alignContent: 'flex-end'
    },
    badges: {
        width: 62,
        height: 62,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    settings: {
        marginTop: 60,
        marginRight: 40,
        alignSelf: 'flex-end',
        position: 'absolute',
    }
})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen