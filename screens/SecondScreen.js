import React from "react";
// on importe les composants de React Nactive 
import { StyleSheet,Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
// on recupere la largeur de l'ecran
const screenWidth = Dimensions.get("window").width;
const imageHeight = screenWidth * 600 / 900;

export default function SecondScreen(props){
    // recuperation de la fonction de navigation
    const{navigation } = props;
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
            <Text style={styles.text}>Dracula est un roman épistolaire de l'écrivain irlandais Bram Stoker publié en 1897. Il raconte l'histoire du comte Dracula, un vampire immortel qui se repaît du sang des vivants et peut les transformer à leur tour en créature démoniaque.</Text>
            <Text style={styles.text}>La complexité du personnage de Dracula renouvelée par des thèmes modernes chers à la psychanalyse comme l'association d'Éros et de Thanatos — du désir de la vie éternelle — ou le questionnement des limites (entre la bête et l'homme, entre la vie et la mort ou entre le Bien et le Mal…) en feront un mythe moderne que le cinéma contribuera à amplifier par le biais d'adaptations..</Text>
            <Image source={ require("../assets/images/Image20230117141840.jpg")} style={{ width: screenWidth , height:imageHeight }} />

            <Text style={styles.text}>
            Dracula n'est pas le premier roman fantastique à exploiter le thème du vampire. Il marque pourtant une étape cruciale dans la littérature fantastique et en particulier celle abordant le thème des vampires ; le succès du livre et la popularité du personnage l'attestent encore aujourd'hui. Plus que le sens du récit et la maîtrise du suspense de Stoker, c'est la personnalité de son personnage principal qui fonde le mythe. Le comte Dracula, au-delà de la créature d'épouvante aux pouvoirs surnaturels, est avant tout un être humain damné, un non-mort, et c'est cette dimension complexe qui assure son charme.
            </Text>
            <TouchableOpacity style={styles.toButton} onPress={()=>navigation.navigate("ThirdScreen")}>
    <Text style={styles.toText}>Decouvrir un autre monstre</Text>
            </TouchableOpacity>
            </ScrollView>
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
        fontSize:25,
        marginBottom:5,
        fontFamily:"roboto",
        textAlign: "justify",
        paddingHorizontal: 20,
        color: "white",
    },
    toText:{
    fontSize:20,
    color:"white",
    },
    toButton:{
    backgroundColor:"#580B9f",
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:30,
    marginHorizontal:20,
    alignItems:"center",
    marginBottom:20,
    }
});