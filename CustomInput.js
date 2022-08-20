import React from "react";
import {View, Text,TextInput, StyleSheet} from 'react-native'

const CustomInput = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="username"/>
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      width:'90%',
      borderRadius:5,
      borderColor:'#e8e8e8',
      borderWidth:1,

      paddingHorizontal:10,
      marginVertical:5,
    },
})
export default CustomInput