import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const AchievementsScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={styles.background}
        >
            <SafeAreaView style={styles.logoContainer}>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#302852"
    }
})

export default AchievementsScreen

