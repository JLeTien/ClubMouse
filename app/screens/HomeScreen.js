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
function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
}

export default HomeScreen;