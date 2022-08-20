import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/Space.png")}
        >
            <SafeAreaView>
                <Text>ProfileScreen</Text>
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    }
  })

export default ProfileScreen