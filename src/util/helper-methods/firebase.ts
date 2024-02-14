import { FIREBASE_DB } from "../../lib/firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const readDataFromCollection = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(
      collection(FIREBASE_DB, collectionName)
    );
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};

export const addDataToCollection = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(FIREBASE_DB, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};