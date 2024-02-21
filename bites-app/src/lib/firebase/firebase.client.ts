// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth"
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export let app: FirebaseApp;
export let auth: Auth;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBby9AgARgN3N3Ap7h3izKQ_szTVSVkknc",
  authDomain: "bites-login.firebaseapp.com",
  projectId: "bites-login",
  storageBucket: "bites-login.appspot.com",
  messagingSenderId: "625166516857",
  appId: "1:625166516857:web:f4e7f329e5074407988aa8",
  measurementId: "G-LS59VE0LBQ"
};

// No idea why, but must check if empty first. Otherwise entire app immediately dies. 
if (!firebase.apps.length) {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  console.log('Firebase initialized')
} else {
  console.error('Could not initialize firebase, already have a running firebase app.')
}


// // Initialize Firebase
// export const app: FirebaseApp = initializeApp(firebaseConfig);
// export const auth: Auth = getAuth()

// export const initializeFirebase = () => {
//   if (!app) {
//     app = initializeApp(firebaseConfig)
//     auth = getAuth(app)
//   }
// }
