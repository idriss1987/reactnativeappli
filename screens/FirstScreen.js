import React from "react";
//on importe les composants React Native dont on a besoin 
import { StyleSheet, Text , View , SafeAreaView , Image, Dimensions ,ScrollView , Button } from "react-native";
// on importe status bar
import { StatusBar } from "expo-status-bar";
// on importe les constantes pour avoir la hauteur de la status bar 
import Constants from "expo-constants";
// on importe les 2 images a utiliser dans les assets
import monster1 from "../assets/images/66076_happy_red_monster_icon.png";
import monster2 from "../assets/images/66079_happy_monster_yellow_icon.png";
// on recupere avec dimensions 
const {width,height} = Dimensions.get("window");


//on definit notre composant 
export default function FirstScreen(props){
    // on recupere la navigation dans les props 
    const{navigation} = props;
//on retourne le JSX de l'ecran 
return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.ligne1}><Text style={styles.textMonsters}>Monsters</Text></View>
        <View style= {styles.ligne2}>
        <Image source={monster1} style={[styles.image,{width:width*0.4, height:width*0.4}]}/>
        <Image source={monster2} style={[styles.image,{width:width*0.4, height:width*0.4}]}/>
        </View>
        <View style= {styles.ligne3}>
            <ScrollView>
            <Text style={styles.text}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
        <Text style={styles.text}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
        </ScrollView>
        </View>
        <Button title="Voir l'ecran 2" onPress={()=>navigation.navigate("SecondScreen")}/>
        <StatusBar style="light" />
    </SafeAreaView>
    
    )

}

// on definit les styles 
const styles = StyleSheet.create({
    image: {
        backgroundColor:"red",
        // resizeMode: "contain",
    },
container : {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    flexDirection: "column", //on definit la direction du flex colunn est la valeur par defaut 
    // alignItems:"center",
},
ligne1:{
    flex:2,
    // backgroundColor:"red",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
},
ligne2:{
    flex:4,
    // backgroundColor:"blue",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-around"
},
ligne3:{
    flex:6,
    //backgroundColor:"green",
    //paddingHorizontal:20,
},
text:{
    fontSize:25,
    marginBottom:20,
    fontFamily:"roboto",
    textAlign: "justify",
    paddingHorizontal: 20,
},
textMonsters:{
    fontFamily: "creepster",
    fontSize:48,
},

});