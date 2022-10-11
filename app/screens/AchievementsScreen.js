import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Achievement from './components/Achievement'
const AchievementsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.background}>
            <View stlye={styles.headingContainer}>
                <Text style={styles.heading}>Challenges</Text>
            </View>

            <ScrollView scrollEventThrottle={16}>
                <View style={styles.row}>
                    <Text style={{ fontsize: 60, fontWeight: '700', paddingHorizontal: 10, color: 'white', paddingLeft: 30 }}>
                        Pets
                    </Text>
                    <View style={{ height: 170, marginTop: 20, backgroundColor: '#302852' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Achievement imageUri={(require('../assets/Dog.png'))}
                                name="DOG" desc="Complete 1 sleep on schedule"></Achievement>
                            <Achievement imageUri={(require('../assets/Cow.png'))}
                                name="COW" desc="Complete 3 sleep on schedule"></Achievement>
                            <Achievement imageUri={(require('../assets/Eagle.png'))}
                                name="EAGLE" desc="Complete 10 sleep on schedule"></Achievement>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={{ fontsize: 60, fontWeight: '700', paddingHorizontal: 10, color: 'white', paddingLeft: 30 }}>
                        Plants
                    </Text>
                    <View style={{ height: 170, marginTop: 20, backgroundColor: '#302852' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Achievement imageUri={(require('../assets/FlowerBush.png'))} name="BUSH"
                                desc="Add an entry to Calendar"></Achievement>
                            <Achievement imageUri={(require('../assets/Tree.png'))} name="TREE"
                                desc="Add 5 entries to Calendar"></Achievement>
                            <Achievement imageUri={(require('../assets/AppleTree.png'))} name="APPLES"
                                desc="Add 10 entries to Calendar"></Achievement>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text style={{ fontsize: 60, fontWeight: '700', paddingHorizontal: 10, color: 'white', paddingLeft: 30 }}>
                        Rare
                    </Text>
                    <View style={{ height: 170, marginTop: 20, backgroundColor: '#302852' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Achievement imageUri={(require('../assets/Robot.png'))} name="ROBOT"
                                desc="Add an entry to Calendar"></Achievement>
                            <Achievement imageUri={(require('../assets/Narwhal.png'))} name="NARWHAL"
                                desc="Add 5 entries to Calendar"></Achievement>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#302852",
        flex: 1
    },
    row: {
        backgroundColor: "#302852",
        flex: 1,
        paddingTop: 20,
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
    heading: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        padding: 20,
    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    text: {
        color: 'white',
        fontsize: 30
    }
})

export default AchievementsScreen