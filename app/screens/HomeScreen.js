import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../CustomButton';
import CustomInput from '../../CustomInput';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [Username]=useState('DEFALT NAME');
  const [Age]=useState('12903409132');

  return (
    <SafeAreaView style={styles.background}>
            <View style={styles.top}>
              <Text style={styles.heading}> Home </Text>
              <Text style={styles.text}> Good Morning Anthony </Text>
            </View>
            <View style={styles.middle}>
              <TouchableOpacity style={styles.button}>
              <CustomButton text="PROFILE" onPress={() => navigation.navigate("ProfileScreen",{Username,Age})} />
              </TouchableOpacity>
            </View>
        </SafeAreaView>
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