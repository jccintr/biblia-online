import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "./screens/Home";
import Livro from "./screens/Livro";
import Preload from "./screens/Preload";



const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true}} initialRouteName="Preload">
        <Stack.Screen  name="Preload" options={{ headerShown: false }} component={Preload}/>
        <Stack.Screen  name="Home" options={{ title: 'Bíblia Sagrada' }} component={Home}/>
        <Stack.Screen  name="Livro" options={({ route }) => ({ title: route.params.name })} component={Livro}/>
    </Stack.Navigator>
  )
}

export default MainStack