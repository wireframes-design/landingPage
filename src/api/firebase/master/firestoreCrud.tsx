// dynamic code...........

import {
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  setDoc,
} from "firebase/firestore";
import { firestore } from "@/firebase/firebaseConfig";
// createDocument works properly
const createDocument = async (collectionName: string, document: any) => {
  try {
    const docRef = await addDoc(
      collection(firestore, collectionName),
      document
    );
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

// createDocumentWithCustomId works properly
const createDocumentWithCustomId = async (
  collectionName: string,
  document: any,
  customId: string
) => {
  try {
    const docRef = doc(firestore, collectionName, customId);
    await setDoc(docRef, document);
    return docRef.id;
  } catch (error) {
    console.error("Error setting document with custom ID: ", error);
    throw error;
  }
};

const readDocument = async (collection: string, id: string) => {
  try {
    const docRef = doc(firestore, collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

const updateDocument = async (
  collection: string,
  id: string,
  document: any
) => {
  try {
    const docRef = doc(firestore, collection, id);
    await updateDoc(docRef, document);
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

const deleteDocument = async (collection: string, id: string) => {
  try {
    const docRef = doc(firestore, collection, id);
    await deleteDoc(docRef);
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

//const FirestoreCrud =
export {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
  createDocumentWithCustomId,
};

//export default FirestoreCrud;
