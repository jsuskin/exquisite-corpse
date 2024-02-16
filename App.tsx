import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Canvas from "./src/screens/Canvas";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import FIREBASE_APP from "./src/lib/firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const auth = getAuth(FIREBASE_APP);

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Profile'
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Settings'
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Canvas'
              component={Canvas}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      <StatusBar style='auto' hidden={true} />
    </Provider>
  );
}
