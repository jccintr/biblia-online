import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "./screens/Home";
import Livro from "./screens/Livro";



const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true}} initialRouteName="Home">
      
        <Stack.Screen  name="Home" options={{ title: 'Bíblia Sagrada' }} component={Home}/>
        <Stack.Screen  name="Livro" options={({ route }) => ({ title: route.params.name })} component={Livro}/>
      
    </Stack.Navigator>
  )
}

export default MainStack