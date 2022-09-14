import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
// import { DropDown } from 'react-native-material-dropdown'

const AchievementsScreen = () => {
    const navigation = useNavigation();

    return (
        // <SafeAreaView style={styles.background}>
            <ScrollView style={styles.background}>
                <View style={styles.box}>
                    <Image style={styles.picture} source={require('../assets/Tree.png')}/>
                    <View style={styles.info}> 
                        <Text> SHREK </Text>
                        <Text> Complete 5 Sleep: 3/5 </Text>
                        <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'}/>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image style={styles.picture} source={require('../assets/shrek.png')}/>
                    <View style={styles.info}> 
                        <Text> SHREK </Text>
                        <Text> Complete 5 Sleep: 3/5 </Text>
                        <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'}/>
                    </View>
                </View>
                <View style={styles.box}>
                    <Image style={styles.picture} source={require('../assets/shrek.png')}/>
                    <View style={styles.info}> 
                        <Text> SHREK </Text>
                        <Text> Complete 5 Sleep: 3/5 </Text>
                        <Progress.Bar progress={0.7} width={200} height={10} animated={true} color={'#57CC99'}/>
                    </View>
                </View>
            </ScrollView>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#302852"
    },
    box: {
        top: 100,
        margin: 20,
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
        height: 90,
        width: 90,
    },
    text: {
        color: 'white',
    }
})

export default AchievementsScreen
