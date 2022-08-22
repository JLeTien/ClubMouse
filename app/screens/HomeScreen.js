import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <SafeAreaView>
                <Text style={{ color: "white", fontSize: 40}}>HOME</Text>
                <TouchableOpacity style={{ width:200, backgroundColor:"white" }}>
                  <Button onPress={() => navigation.navigate("ProfileScreen")} title="GO TO PROFILE!" style={styles.button}/>
                </TouchableOpacity>
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
  button: {
    flexDirection: 'row', 
        height: 50, 
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
  }
})

export default HomeScreen