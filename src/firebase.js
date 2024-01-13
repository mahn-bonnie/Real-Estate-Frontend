// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6fdda.firebaseapp.com",
  projectId: "mern-estate-6fdda",
  storageBucket: "mern-estate-6fdda.appspot.com",
  messagingSenderId: "632579347154",
  appId: "1:632579347154:web:e7c4456f8cd5d69e26930b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);