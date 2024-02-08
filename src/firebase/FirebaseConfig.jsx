// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1zkTeFryypPGvmu2sf0fy5vQdEN_CYf4",
  authDomain: "ecommerce-e8d4a.firebaseapp.com",
  projectId: "ecommerce-e8d4a",
  storageBucket: "ecommerce-e8d4a.appspot.com",
  messagingSenderId: "849034074998",
  appId: "1:849034074998:web:18872642fb6bb420517857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth}