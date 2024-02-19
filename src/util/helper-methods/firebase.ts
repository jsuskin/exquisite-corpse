import { addDoc, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../../lib/firebase/config";

export const getDocumentByDisplayName = async (
  collectionName: string,
  displayName: string
) => {
  try {
    const q = query(
      collection(FIREBASE_DB, collectionName),
      where("displayName", "==", displayName)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No documents found matching the display name:", displayName);
      return null; // Return null or throw an error if no document is found
    } else {
      // Assuming there's only one document with the given display name
      const doc = querySnapshot.docs[0];
      console.log("Document found:", doc.id, " => ", doc.data());
      return doc.data();
    }
  } catch (error) {
    console.error("Error getting document by display name: ", error);
    throw error;
  }
};

export const readDataFromCollection = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(
      collection(FIREBASE_DB, collectionName)
    );

    return querySnapshot;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};

export const addDataToCollection = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(FIREBASE_DB, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};