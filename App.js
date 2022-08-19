import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  console.log("App executed");



  return (
    <View style={styles.container}>
      <Text>
        Suck my ass
        <Image
          style={{width: 150, height: 150}}
          source={require('./assets/Geun.jpg')}
        />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
                   