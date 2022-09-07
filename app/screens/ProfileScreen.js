import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

// 
const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    // const [time,setTime] = useState(null);
    // useEffect(() => {
    //     let time = getCurrentTime();
    //     setTime(time);
    //   }, []);
    //   const getCurrentTime = () => {
    //     let today = new Date();
    //     let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    //     let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    //     let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    //     return hours + ':' + minutes + ':' + seconds;
    //   }
    
     const { Username = "Name"} = route.params;
     const { Age = "Age"} = route.params;
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.top}> 
                <Image style={styles.logo} source={require('../assets/Hyoon.jpg')}/>
                <View style={styles.info}>
                    <Text style={styles.userText}>{Username}</Text>
                    <Text style={styles.userText}>{Age}</Text>
                    <Text style={styles.userText}>ID: 123123123</Text>
                </View>
            </View>

            <View style={styles.middle}>
                <Text style={styles.levelText}>Level 1</Text>
                <Image style={styles.xp} source={require('../assets/xpBar.png')}/>
            </View>

            <View style={styles.bottom}>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // Deels with the background
    background: {
        flex: 1,
        backgroundColor: "#302852"
    },
    // Title
    top: {
        margin: 30,
        top:50,
        borderColor: "white",
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    info: {
        flexDirection: "column"
    },
    middle: {
        flex: 0.3,
        margin: 30,
        borderColor: "white",
        borderWidth: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    bottom: {
        flex: 0.3,
        borderColor: "white",
        borderWidth: 1, 
        margin: 20,
    },
    title: {
        fontSize: 40,
        color: "white",
        margin: 10,
        fontWeight: "bold"
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 200/2,
        borderColor: 'white',
        borderWidth: 3,
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
        color: "white",
        alignContent: 'flex-end'
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
        color: "white"
    },
    xp: {
        resizeMode: 4,
    }
})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen