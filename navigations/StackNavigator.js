import React from "react";
// on importe les composants de react navigation
// on importe navigationContainer pour englober l'ensemble de nos ecrans 
import { NavigationContainer } from "@react-navigation/native";
// on importe createstacknavigator pour creer une pile d ecrans 
import { createStackNavigator } from "@react-navigation/stack";
// on importe les ecrans participants a la pile 
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

import CustomHeader from "../screens/CustomHeader";
// on instancie la pile de navigation 
const Stack = createStackNavigator();

export default function StackNavigator(){
    return (
        // on englobe l'ensemble de nos ecrans dans navigation container
        <NavigationContainer>
            {/* on definit la pile d'ecrans  */}
            <Stack.Navigator initialRouteName="FirstScreen" screenOptions={{gestureEnabled: true, /*headerShown: false*/}}>
                {/* on definit les ecrans de la pile  */}
                {/* <Stack.Screen name="SecondScreen" component={SecondScreen} options={{title: "Ecran 2", headerStyle:{backgroundColor:"#8C47E4"}, headerTintColor: "white",headerTitleStyle:{ fontSize: 35, fontFamily: "creepster"} }}/> */}
                <Stack.Screen name="SecondScreen" component={SecondScreen} options={{headerStyle:{backgroundColor:"#0890C8"} , headerTitle:(props)=><CustomHeader {...props} title= "meduse" />}} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown: false}} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{title:"Ecran 3", headerStyle:{backgroundColor:"#356Af5"},headerTitleColor: "white", headerTitle:{fontSize:35, fontFamily: "creepster"} }}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
}