import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../lib/firebase/config";

export const getMessage = async (id: string) => {
  try {
    const q = query(
      collection(FIREBASE_DB, "messages"),
      where("id", "==", id)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No documents found matching the message id:", id);
      return null; // Return null or throw an error if no document is found
    } else {
      const doc = querySnapshot.docs[0];
      console.log("Document found:", doc.id, " => ", doc.data());
      return doc.data();
    }
  } catch (error) {
    console.error("Error getting document by message id: ", error);
    throw error;
  }
}

export const getUserByDisplayName = async (displayName: string) => {
  try {
    const q = query(
      collection(FIREBASE_DB, "users"),
      where("displayName", "==", displayName)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No documents found matching the display name:", displayName);
      return null; // Return null or throw an error if no document is found
    } else {
      const doc = querySnapshot.docs[0];
      console.log("Document found:", doc.id, " => ", doc.data());
      return doc.data();
    }
  } catch (error) {
    console.error("Error getting document by display name: ", error);
    throw error;
  }
};

export const readDataFromCollection = async (
  collectionName: string,
  filterTerm?: string
) => {
  try {
    const querySnapshot = await getDocs(
      collection(FIREBASE_DB, collectionName)
    );

    // Array to store the data from documents
    const dataArray: any = [];

    // Iterate over each document in the snapshot
    querySnapshot.forEach((doc) => {
      // Get the data from the document
      const data = doc.data();

      // Check if filterTerm is provided and if the to.displayName matches it
      if (!filterTerm || (data.to && data.to.displayName === filterTerm)) {
        // Add the data to the filtered array with the message id
        dataArray.push({ id: doc.id, ...data });
      }
    });

    // Return the array containing data from all documents
    return dataArray;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};

export const addDataToCollection = async (
  collectionName: string,
  data: any
) => {
  try {
    const docRef = await addDoc(collection(FIREBASE_DB, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
