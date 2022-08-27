import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

// 
const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    return (
        // Background Image
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <SafeAreaView style = {styles.container}>
                <Text style = {styles.text}>Hello</Text>
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
        height: 200,
        top: 200
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 20,
        color: "white"
    }
})

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default ProfileScreen