import React from "react";
// on importe les composants de React Nactive 
import { StyleSheet,Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";

export default function SecondScreen(){
    return (
        <SafeAreaView style={ styles.container }>
            <Text style={styles.text}>SecondScreen</Text>
        </SafeAreaView>
        );
}

// on definit les styles 
const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"blue",
    },
    text:{
    color:"white",
    }
});