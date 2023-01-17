import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
// on importe l'ecran firstScreen 
// import FirstScreen from './screens/FirstScreen';

// on importe la pile de navigation 
import StackNavigator from './navigations/StackNavigator';

// on importe usefonts pour charger les fonts 
import {useFonts} from "expo-font";

export default function App() {
  // on charge les fonts avec usefonts et le chargement est asynchrome
  let [fontsLoaded] = useFonts({
    "creepster": require("./assets/fonts/Creepster-Regular.ttf"),
    "roboto": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  // suivant la valeur de fontsLoaded on retourne le JSX d'un ecran 

  if (!fontsLoaded){
    return (
       <SafeAreaView style = {{backgroundColor: "black", flex: 1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{ color: "white", fontSize: 24 }}> Loading....</Text>
       </SafeAreaView>
       );
  }
  return (
    <StackNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
