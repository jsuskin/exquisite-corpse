import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: `${process.env.EXPO_PUBLIC_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.EXPO_PUBLIC_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: `${process.env.EXPO_PUBLIC_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.EXPO_PUBLIC_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};

const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const FIREBASE_DB = getFirestore(FIREBASE_APP);

export default FIREBASE_APP;