// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export let app: FirebaseApp;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

// No idea why, but must check if empty first. Otherwise entire app immediately dies sometimes. 
if (!firebase.apps.length) {
  app = initializeApp(firebaseConfig)
} else {
  console.error('Could not initialize firebase, already have a running firebase app.')
  deleteApp(firebase.apps[0])
  app = initializeApp(firebaseConfig)
  console.log('Had to delete firebase instance and reinitialize')
}

export const auth = getAuth(app)
export const db = getFirestore(app)
