import React, {useState,useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [time,setTime] = useState(null);
    useEffect(() => {
        let time = getCurrentTime();
        setTime(time);
      }, []);
      const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
      }
  
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}> 
        <Text 
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.text}>Good Night Anthony</Text>
      </View>
      <View syle={styles.middle}>
        <Text style={styles.text}>{time}</Text>
      </View>
      <View syle={styles.bottom}>
        <Text>Current Task</Text>
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
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 1,
  },
  middle: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom:100,
    flex: 1,
  },
  bottom: {
    flex: 1,
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
    color: "white",
    fontSize: 20,
  }
})

export default HomeScreen