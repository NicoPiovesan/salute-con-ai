// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWHY7gpmGXIoLZi55tIHmOGObEH9CqcGc",
  authDomain: "salute-con-ai.firebaseapp.com",
  projectId: "salute-con-ai",
  storageBucket: "salute-con-ai.firebasestorage.app",
  messagingSenderId: "1024509381417",
  appId: "1:1024509381417:web:8b828df7b3819865a1c538",
  measurementId: "G-B9S5EYDV7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
