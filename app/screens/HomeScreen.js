import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
            style={styles.background}
            source={require("../assets/space.png")}
        >
            <SafeAreaView>
                <Image style={styles.logo} source={require('../assets/Hyoon.jpg')}/>
                <Text style={{ color: "white", fontSize: 40}}>HOME</Text>
                <Button onPress={() => navigation.navigate("ProfileScreen")} title="GO TO PROFILE!"/>
            </SafeAreaView>

        </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
})

export default HomeScreen