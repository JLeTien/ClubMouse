import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

// 
const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    
     const { Username = "Name"} = route.params;
     const { Age = "Age"} = route.params;
    return (
        <SafeAreaView style={styles.background}>
            {/* user container */}
            <View style={styles.userContainer}> 
                <Image style={styles.logo} source={require('../assets/Hyoon.jpg')}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.userText}>{Username}</Text>
                    <Text style={styles.userText}>{Age}</Text>
                    <Text style={styles.userText}>ID: 123123123</Text>
                </View>
            </View>
            {/* level container */}
            <View style={styles.levelContainer}>
                <Text style={styles.levelText}>Level 1</Text>
                <Image style={styles.xp} source={require('../assets/xpBar.png')}/>
            </View>

            {/* stats container */}
            <View style={styles.statsContainer}>
                <Text style={styles.levelText}>Statistics</Text>
                <Text style={styles.userText}>Most Consecutive Sleeps: 10</Text>
                <Text style={styles.userText}>Total Number of Sleeps: 100</Text>
                <Text style={styles.userText}>Another statisitc: Cool</Text>
            </View>

            {/* showcase container */}
            <View style={styles.showcaseContainer}>
                <Text style={styles.showcaseText}>Badges Showcase</Text>
                {/* container to hold the badges */}
                <View style={styles.bigBadgesContainer}>
                    {/* badge 1 */}
                    <View style={styles.badgesContainer}>
                        <Image style={styles.badges} source={require('../assets/Hyoon.jpg')}/>
                    </View>
                    {/* badge 2 */}
                    <View style={styles.badgesContainer}>
                        <Image style={styles.badges} source={require('../assets/Hyoon.jpg')}/>
                    </View>
                    {/* badge 3 */}
                    <View style={styles.badgesContainer}>
                        <Image style={styles.badges} source={require('../assets/Hyoon.jpg')}/>
                    </View>
                </View> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // Deals with the background
    background: {
        flex: 1,
        backgroundColor: "#302852"
    },

    // User Details
    userContainer: {
        margin: 30,
        top: 50,
        borderColor: "white",
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 200/2,
        borderColor: 'white',
        borderWidth: 3,
        justifyContent: "flex-start"
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
        flex: 0.3,
        margin: 30,
        borderColor: "white",
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        bottom: 50
    },

    // Showcase of badges
    showcaseContainer: {
        flex: 0.35,
        borderColor: "white",
        borderWidth: 1, 
        marginHorizontal: 20,
        marginTop: 20,
        bottom: 90,
    },
    showcaseText: {
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    },
    bigBadgesContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: "white",
        borderWidth: 1, 
    },
    badgesContainer: {
        width: '33.333%',
        borderWidth: 1
    },
    badges: {
        width: 100,
        height: 100,
        borderRadius: 200/2,
        borderColor: 'white',
        borderWidth: 3,
        margin: 5,
    },

})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen