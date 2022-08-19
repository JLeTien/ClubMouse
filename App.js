import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Image, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={[styles.container, ContainerStyle]}>
      <Text numberOfLines={3}>
        Hi my name is geun, scratch my belly
      </Text>
      <TouchableHighlight onPress={() => alert('Yes Daddy')}>
        <Image
            //blurRadius={10}
            style={{width: 300, height: 300}}
            source={require('./assets/Geun.jpg')}
          />
      </TouchableHighlight>
      <Button 
        title="Click Me"
        onPress={() => Alert.alert("My Title","My message", [
          {text: "Yes", onPress: () => console.log("Yes") },
          {text: "No", onPress: () => console.log("No") },
        ])}
        />
      <Button 
        title="Name"
        color="black"
        onPress={() => Alert.prompt("Names", "enter your name", text => console.log(text))}
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const ContainerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
                   