<<<<<<< HEAD
import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const AchievementsScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <SafeAreaView style={styles.logoContainer}>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    }
})

export default AchievementsScreen
=======
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

>>>>>>> e6614a81c3de72fdb30dd48eedb7f7408573e99a
