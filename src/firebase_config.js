import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0EgB8Abtpgecl15Sn0GeKmRovol8HEQE",
    authDomain: "test-41e7e.firebaseapp.com",
    projectId: "test-41e7e",
    storageBucket: "test-41e7e.appspot.com",
    messagingSenderId: "83794436650",
    appId: "1:83794436650:web:1eebf67ccd8a024188d953",
    measurementId: "G-W9XRXTEV1H"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth, db };