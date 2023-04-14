import React from "react";
import {View } from "react-native";
import LoginScreen from "./app/assets/screens/LoginScreen";
import HomeScreen from "./app/assets/screens/HomeScreen";
import WorkoutsScreen from "./app/assets/screens/WorkoutsScreen";
import MealsScreen from "./app/assets/screens/MealsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Workouts"
          component={WorkoutsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}