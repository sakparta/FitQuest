import React from "react";
import LoginScreen from "./app/assets/screens/LoginScreen";
import HomeScreen from "./app/assets/screens/HomeScreen";
import WorkoutsScreen from "./app/assets/screens/WorkoutsScreen";
import MealsScreen from "./app/assets/screens/MealsScreen";
import ProgressScreen from "./app/assets/screens/ProgressScreen";
import SignInScreen from "./app/assets/screens/SignInScreen";
import MyWorkoutsScreen from "./app/assets/screens/MyWorkoutsScreen";
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
          name="MyWorkouts"
          component={MyWorkoutsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}