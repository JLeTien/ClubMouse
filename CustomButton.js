import React from "react";
import {View, Text,TextInput, StyleSheet,Pressable} from 'react-native'

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )


}

const styles = StyleSheet.create({
    container:{
     
        backgroundColor:'#302852',
        alignItems:'center',
        width:'50%',
        padding:10,
        borderRadius:40,
        borderColor:'#e8e8e8',
        borderWidth:1,
        paddingHorizontal:10,
        marginVertical:5,
    },
    text:{   color:'#FFFFFF',}
})
export default CustomButton