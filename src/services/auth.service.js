// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUSO2CJT21NDmHDLzmMQbblZcttGwX5QA",
  authDomain: "abpro7-82645.firebaseapp.com",
  projectId: "abpro7-82645",
  storageBucket: "abpro7-82645.appspot.com",
  messagingSenderId: "629271329311",
  appId: "1:629271329311:web:ee8aac91887b05dcc8732a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};








