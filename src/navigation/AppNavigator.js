import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import Loading from "../screen/Loading";
import LogIn from "../screen/LogIn";
import HomePage from "../screen/HomePage";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#58ceff",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
export default function HomePageNavigation(props) {
  return (
   <SafeAreaProvider>
      <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Loading" component={Loading}/>
      <Stack.Screen name="LogIn" component={LogIn}/>
      {/* <Stack.Screen name="Registation" component={Registation}/> */}
      <Stack.Screen name="Home" component={HomePage}/>
      </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
  );
}