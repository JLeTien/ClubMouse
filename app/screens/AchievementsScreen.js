import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Achievement from './components/Achievement'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AchievementsScreen = () => {
    const [numSleep, setNumSleep] = useState('');
    const [numEntry, setNumEntry] = useState('');
    const navigation = useNavigation();

    const [username, setGetValue] = useState('');
  AsyncStorage.getItem('Username').then(
    (value) =>
        // AsyncStorage returns a promise
        // Adding a callback to get the value
        setGetValue(value),
    // Setting the value in Text
);
    const getData = () => {
        var username1 = username;
        var InsertAPIURL = "https://deco3801-clubmouse.uqcloud.net/achievement.php";   //API to render signup
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        var Data = {
            username: username1,
        };

        fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data) //convert data to JSON
        })
            .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
            .then((response) => {
                setNumEntry(response[0].Message);
                setNumSleep(response[0].numSleepCompleted);
            })
            .catch((error) => {
                alert("Error Occured" + error);
            })
    }
    useEffect(() => {
        getData();
    })
    return (

        <SafeAreaView style={styles.background}>
            <View stlye={styles.headingContainer}>
                <Text style={styles.heading}>Challenges</Text>
            </View>
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.row}>
                    <Text style={styles.categoryHeading}>
                        Pets
                    </Text>
                    <View style={{ height: 170, marginTop: 10, backgroundColor: '#2E1F56' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Achievement imageUri={(require('../assets/Dog2.png'))}
                                name="DOG" desc="Complete 1 sleep on schedule" unlocked="1" requirement={numSleep}></Achievement>
                            <Achievement imageUri={(require('../assets/Cat.png'))}
                                name="CAT" desc="Complete 3 sleep on schedule" unlocked="3" requirement={numSleep}></Achievement>
                            <Achievement imageUri={(require('../assets/Eagle.png'))}
                                name="EAGLE" desc="Complete 10 sleep on schedule" unlocked="10" requirement={numSleep}></Achievement>
                            <Achievement imageUri={(require('../assets/Monkey.png'))}
                                name="MONKEY" desc="Complete 15 sleep on schedule" unlocked="15"  requirement={numSleep}></Achievement>
                            <Achievement imageUri={(require('../assets/Horse.png'))}
                                name="HORSE" desc="Complete 20 sleep on schedule" unlocked="20"  requirement={numSleep}></Achievement>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.categoryHeading}>
                        Plants
                    </Text>
                    <View style={{ height: 170, marginTop: 10, backgroundColor: '#2E1F56' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Achievement imageUri={(require('../assets/Flowers.png'))} name="FLOWERS"
                                desc="Add an entry to Calendar" unlocked="1"  requirement={numEntry}></Achievement>
                            <Achievement imageUri={(require('../assets/FlowerBush.png'))} name="BUSH"
                                desc="Add an entry to Calendar" unlocked="3"  requirement={numEntry}></Achievement>
                            <Achievement imageUri={(require('../assets/Pot.png'))} name="POTTED PLANT"
                                desc="Add 5 entry to Calendar" unlocked="5"  requirement={numEntry}></Achievement>
                            <Achievement imageUri={(require('../assets/Tree.png'))} name="TREE"
                                desc="Add 10 entries to Calendar" unlocked="10"  requirement={numEntry}></Achievement>
                            <Achievement imageUri={(require('../assets/AppleTree.png'))} name="APPLE TREE"
                                desc="Add 15 entries to Calendar" unlocked="15"  requirement={numEntry}></Achievement>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={styles.categoryHeading}>
                        Rare
                    </Text>
                    <View style={{ height: 170, marginTop: 10, backgroundColor: '#2E1F56' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Achievement imageUri={(require('../assets/Robot.png'))} name="ROBOT"
                                desc="Add an entry to Calendar" unlocked="yes"></Achievement>
                            <Achievement imageUri={(require('../assets/Narwhal.png'))} name="NARWHAL"
                                desc="Add 5 entries to Calendar" unlocked="no"></Achievement>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#2E1F56",
        flex: 1
    },
    row: {
        backgroundColor: "#2E1F56",
        flex: 1,
        paddingBottom: 20,
    },
    box: {
        top: 100,
        marginHorizontal: 20,
        marginVertical: 5,
        borderColor: "black",
        borderWidth: 3,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: '#BEF0C3',
        borderRadius: 40,
        flex: 0.3,
    },
    entry: {
        top: 100,
        marginHorizontal: 20,
        marginVertical: 5,
        borderColor: "black",
        borderWidth: 3,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: '#BEF0C3',
        borderRadius: 40,
        flex: 0.3,
    },
    info: {
        flexDirection: "column",
        justifyContent: "center"
    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    heading: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        padding: 20,
    },
    categoryHeading: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        paddingLeft: 30
    },
    text: {
        color: 'white',
        fontsize: 30
    }
})

export default AchievementsScreen