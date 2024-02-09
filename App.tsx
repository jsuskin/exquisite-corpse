import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Canvas from "./src/screens/Canvas";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LineThicknessSlider from "./src/components/Menu/LineThicknessSlider";
import SignUp from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Canvas'
            component={Canvas}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' hidden={true} />
    </Provider>
  );
}
