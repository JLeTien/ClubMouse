import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = ({route}) => {
    const navigation = useNavigation();
    const { Username } = route.params;
    const { Age } = route.params;
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <SafeAreaView style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/Hyoon.jpg')}/>
                <Text style={styles.text}>Name:{Username}</Text>
                <Text style={styles.text}>Age: {Age}</Text>
                <Text style={styles.text}>Id:s</Text>
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logoContainer: {
        justifyContent: "center",
        height:200,
        top:200
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: "flex-start"
    },
    text: {
        fontSize:20,
        color:"white"
    }
})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen