import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Image,
    Text,
    Button,
    Alert
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
function Home({ navigation }) {
    return (
        <ImageBackground style={styles.background}
           source={require("../assets/Space.png")}>
        <Text>poop</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        </ImageBackground>
    );
  }
  
  function Profile({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  

  const Stack = createStackNavigator();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={HomeScreen}
 
        />
      </Stack.Navigator>
    );
  }

function WelcomeScreen(props) {
    const login = () => Alert.alert("Login")

    return (
        <NavigationContainer >
        <MyStack />
      </NavigationContainer>
        // <ImageBackground
        //     style={styles.background}
        //     source={require("../assets/Space.png")}
        // >
        //     <View style={styles.logoContainer}>
        //         <Image style={styles.logo} source={require('../assets/Geun.jpg')}/>
        //         <Text style={styles.text}> SLEEP SLEEP SLEEP </Text>
        //     </View>
        //     {/* <View style={styles.loginButton}></View>
        //     <View style={styles.registerButton}></View> */}
        //     <View style={styles.buttonContainer}>
        //         <Button title="Login" style={styles.loginButton}
        //         onPress={login}/>
        //         <Button title="Register" style={styles.registerButton}/>
        //     </View>
        // </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width:"100%",
        height: 70,
        backgroundColor: "#302852",
    },
    registerButton: {
        width:"100%",
        height: 70,
        backgroundColor: "black",
    },
    logo: {
        width: 250,
        height: 250,
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: "center",
    },
    text: {
        color: "white",
    },
    buttonContainer: {
        alignItems: "center",
        bottom: 50,
    }

})

export default WelcomeScreen;