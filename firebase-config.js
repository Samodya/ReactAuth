// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQuIM2LpOEjpNZlVHlIcFxrHIeCVgj4dc",
    authDomain: "react-crud-97cec.firebaseapp.com",
    projectId: "react-crud-97cec",
    storageBucket: "react-crud-97cec.appspot.com",
    messagingSenderId: "479130764618",
    appId: "1:479130764618:web:3142345bb446a282beedb3",
    measurementId: "G-QXM7LPZT36"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);