import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/space1.png")}
        >
            <SafeAreaView>
                <Text style={{ color: "white", fontSize: 40}}>PROFILE</Text>
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ProfileScreen