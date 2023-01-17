import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import meduse from "../assets/images/8467997_character_fantasy_gorgon_medusa_monster_icon.png";

export default function CustomHeader(props){
    return (
        <View style= {styles.container}>
            <Image source={meduse} style={styles.image}/>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        );
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "#0890C8",
    flexDirection: "row",
    },
    text:{
    color: "white",
    fontSize: 35,
    fontFamily: "creepster",
    },
    image:{
    width: 50, 
    height: 50,
    }
});