import React from "react";
import {View, Text,TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue,placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
            />
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
    input:{color:"black"},
})
export default CustomInput