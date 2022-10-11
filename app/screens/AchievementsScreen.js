import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { DropDown } from 'react-native-material-dropdown'
import Achievement from './components/Achievement'
const AchievementsScreen = () => {
    const navigation = useNavigation();

    return (
        // <SafeAreaView style={styles.background}>
        // <ScrollView style={styles.background}>
        //     <View style={styles.box}>
        //         <Image style={styles.picture} source={require('../assets/Tree.png')} />
        //         <View style={styles.info}>
        //             <Text> Tree </Text>
        //             <Text> Complete 5 Sleep: 3/5 </Text>
        //             <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'} />
        //         </View>
        //     </View>
        //     <View style={styles.box}>
        //         <Image style={styles.picture} source={require('../assets/AppleTree.png')} />
        //         <View style={styles.info}>
        //             <Text> Dog </Text>
        //             <Text> Complete 5 Sleep: 3/5 </Text>
        //             <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'} />
        //         </View>
        //     </View>
        //     <View style={styles.box}>
        //         <Image style={styles.picture} source={require('../assets/Dog.png')} />
        //         <View style={styles.info}>
        //             <Text> Cow </Text>
        //             <Text> Complete 5 Sleep: 3/5 </Text>
        //             <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'} />
        //         </View>
        //     </View>
        //     <View style={styles.box}>
        //         <Image style={styles.picture} source={require('../assets/Cow.png')} />
        //         <View style={styles.info}>
        //             <Text> Cow </Text>
        //             <Text> Complete 5 Sleep: 3/5 </Text>
        //             <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'} />
        //         </View>
        //     </View>
        //     <View style={styles.box}>
        //         <Image style={styles.picture} source={require('../assets/Eagle.png')} />
        //         <View style={styles.info}>
        //             <Text> Cow </Text>
        //             <Text> Complete 5 Sleep: 3/5 </Text>
        //             <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'} />
        //         </View>
        //     </View>
        //     <View style={styles.box}>
        //         <Image style={styles.picture} source={require('../assets/Narwhal.png')} />
        //         <View style={styles.info}>
        //             <Text> Cow </Text>
        //             <Text> Complete 5 Sleep: 3/5 </Text>
        //             <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'} />
        //         </View>
        //     </View>
        // </ScrollView>
        // </SafeAreaView>


        // <SafeAreaView style={styles.background}>
        //     <View stlye={styles.headingContainer}>
        //         <Text style={styles.heading}>Challenges</Text>
        //     </View>

        //     <ScrollView style={styles.container}>
        //         <View style={styles.entry}>
        //             <ScrollView>
        //                 <Text> Entry 1 </Text>
        //             </ScrollView>
        //         </View>

        //         <View style={styles.box}>
        //             <Text> Entry 2 </Text>
        //         </View>

        //         <View style={styles.box}>
        //             <Text> Entry 2 </Text>
        //         </View>
        //     </ScrollView>
        // </SafeAreaView >

        <SafeAreaView style={styles.background}>
            <View stlye={styles.headingContainer}>
                <Text style={styles.heading}>Challenges</Text>
            </View>

            <ScrollView scrollEventThrottle={16}>
                <View style={styles.row}>
                    <Text style={styles.categoryHeading}>
                        Pets
                    </Text>
                    <View style={{ height: 170, marginTop: 10, backgroundColor: '#302852' }}>
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
                    <Text style={styles.categoryHeading}>
                        Plants
                    </Text>
                    <View style={{ height: 170, marginTop: 10, backgroundColor: '#302852' }}>
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
                    <Text style={styles.categoryHeading}>
                        Rare
                    </Text>
                    <View style={{ height: 170, marginTop: 10, backgroundColor: '#302852' }}>
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