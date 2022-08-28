import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text 
        onPress={() => navigation.navigate("HomeScreen")}
        style={{ fontSize: 26, fontWeight: 'bold'}}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#302852"
  },
  top: {
    flex: 0.2,
  },
  middle: {
    flex: 0.5,
  },
  button: {
    flexDirection: 'row', 
        height: 50,
        width:200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
  },
  heading: {
    color: "white",
    fontSize: 40,
  },
  text: {
    color: "white"
  }
})

export default HomeScreen