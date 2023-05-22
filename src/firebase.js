// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfsHN3IdglKDdy-sXVCE6_Quakwqb1V_8",
  authDomain: "real-time-app-31f5c.firebaseapp.com",
  projectId: "real-time-app-31f5c",
  storageBucket: "real-time-app-31f5c.appspot.com",
  messagingSenderId: "990740456805",
  appId: "1:990740456805:web:43253b26fa7790551ead8c",
  measurementId: "G-R89X4FK8MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);