import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
            style={styles.background}
            source={require("../assets/Sikk.jpg")}
        >
            <SafeAreaView>
                <Text style={{ color: "white", fontSize: 40}}>Welcome Back!!!!</Text>
                <Button onPress={() => navigation.navigate("ProfileScreen")} title="GO TO PROFILE!"/>
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

export default HomeScreen