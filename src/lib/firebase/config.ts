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

// export const readDataFromCollection = async (collectionName: string) => {
//   try {
//     const querySnapshot = await getDocs(
//       collection(FIREBASE_DB, collectionName)
//     );
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   } catch (error) {
//     console.error("Error getting documents: ", error);
//   }
// };

// export const addDataToCollection = async (
//   collectionName: string,
//   data: any
// ) => {
//   try {
//     const docRef = await addDoc(collection(FIREBASE_DB, collectionName), data);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };

export default FIREBASE_APP;