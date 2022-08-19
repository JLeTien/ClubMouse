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
  Button
} from 'react-native';

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3}>
        Hi my name is geun, scratch my belly
      </Text>
      <TouchableHighlight onPress={() => console.log("Photo pressed")}>
        <Image
            //blurRadius={10}
            style={{width: 300, height: 300}}
            source={require('./assets/Geun.jpg')}
          />
      </TouchableHighlight>
      <Button 
        title="Click Me"
        color="orange"
        onPress={() => console.log("Button tapped")}> 
      </Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
                   