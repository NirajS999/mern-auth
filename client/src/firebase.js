// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-50991.firebaseapp.com",
  projectId: "mern-auth-50991",
  storageBucket: "mern-auth-50991.firebasestorage.app",
  messagingSenderId: "625026658570",
  appId: "1:625026658570:web:2209c1d785806251c14af3",
  measurementId: "G-11HYRGJMPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
