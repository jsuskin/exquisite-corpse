import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Canvas from "./src/screens/Canvas";
import Login from "./src/screens/Login";
import { getAuth } from "firebase/auth";
import FIREBASE_APP from "./src/lib/firebase/config";
import { useDispatch, useSelector } from "react-redux";

// const auth = getAuth(FIREBASE_APP);

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  
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
