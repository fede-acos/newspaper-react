// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "newspaper-react-fac32.firebaseapp.com",
  projectId: "newspaper-react-fac32",
  storageBucket: "newspaper-react-fac32.appspot.com",
  messagingSenderId: "814970518276",
  appId: "1:814970518276:web:887f4e44b9678b8d562e51",
  measurementId: "G-61MNNJC4CG",
  databaseURL: "https://newspaper-react-fac32-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);
