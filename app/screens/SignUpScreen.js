import React, { useState,useEffect  } from 'react';
import { StyleSheet, View, Image, Text, Button, Alert, SafeAreaView,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native'
import NavigationBar from '../navigation/NavigationBar';
import { Constants } from 'expo-constants';
import * as SQLite from "expo-sqlite"


function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  useEffect(() => {
    db.transaction((tx) => {
      //delete table for clean table without old entry
      tx.executeSql("DROP TABLE IF EXISTS users;");
      tx.executeSql(
        "CREATE table users (id integer primary key not null, value varchar(255), password varchar(255) );"
      );
    });
  }, []);

  const add = (text) => {
    // is text empty?
    if (username === null || username === "") {
      return false;
    }
    if (password === null || password === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into users (value,password) values (?,?)",[username,password]);
        tx.executeSql("select * from users", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
    return true;
  };

 const onSignInPressed = () => {
  if (add(username)){
    setUsername(null);
    navigation.navigate(NavigationBar);};
 }
return (
  <View style={styles.root}>
    <Text>Login</Text>
    <View style={styles.container}>
      <TextInput
        onChangeText={(username) => setUsername(username)}
        placeholder="Username"
        style={styles.input}
        value={username}
      />
      <TextInput
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        style={styles.input}
        value={password}
      />
    </View>
      <CustomButton text="Log In" onPress={onSignInPressed}/>
    </View>
  )
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
    root:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#302852"
    },
    logo:{
        width: 200,
        height: 300,
    },
    container: {
      backgroundColor:"white",
      width:'90%',
      borderRadius:5,
      borderColor:'#e8e8e8',
      borderWidth:1,
      paddingHorizontal:10,
      marginVertical:5,
      padding:10,
    }
})

export default LoginScreen