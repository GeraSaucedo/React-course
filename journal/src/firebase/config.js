// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCsUrVgooK8CVOR1xGJgEv2wtGA-5ugzM",
  authDomain: "react-course-9d777.firebaseapp.com",
  projectId: "react-course-9d777",
  storageBucket: "react-course-9d777.appspot.com",
  messagingSenderId: "827012595278",
  appId: "1:827012595278:web:faa6574b266e9220b24d1f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore ( FirebaseApp );