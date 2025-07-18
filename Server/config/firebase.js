import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;
import jwt from "jsonwebtoken";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

// USER DATABASE

export const registerUser = async (req) => {
  const datoToUpload = {
    name: req.name,
    email: req.email,
    password: req.password,
    confirmedPassword: req.confirmedPassword,
  };

  try {
    const usersCollection = collection(firestoreDb, "users");
    console.log("Dato to upload", datoToUpload);
    console.log("Users collection", usersCollection);

    const q = query(usersCollection, where("email", "==", datoToUpload.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("User exists!");
      return true;
    }

    const docRef = await addDoc(usersCollection, datoToUpload);

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  const usersCollection = collection(firestoreDb, "users");

  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) throw new Error("User not found");

  const userDoc = querySnapshot.docs[0];
  const userData = userDoc.data();

  if (userData.password !== password) throw new Error("Invalid password");

  const token = jwt.sign({ email: userData.email, id: userDoc.id }, secret, {});

  return { token, role: userData.role, message: "Login successful" };
};

export const getUser = async (email) => {
  const usersRef = collection(firestoreDb, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  if (querySnapshot.size > 1) {
    console.warn(`Multiple users found with email: ${email}`);
  }

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

// PRODUCT DATABASE

export const addProduct = async (req) => {
  const datoToUpload = {
    name: req.name,
    description: req.description,
    category: req.category,
    price: req.price,
    quantity: req.quantity,
    imageProduct: req.imageProduct,
  };

  try {
    const productCollection = collection(firestoreDb, "products");
    console.log("Dato to upload", datoToUpload);
    console.log("Users collection", productCollection);

    const q = query(productCollection, where("name", "==", datoToUpload.name));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("Product exists!");
      return true;
    }

    const docRef = await addDoc(productCollection, datoToUpload);

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export default { app, firestoreDb };
