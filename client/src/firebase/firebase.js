import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDhnn7t7IvZfgMDsOo-oerBTVFGQVmt8fU",
  authDomain: "licenta-5b33a.firebaseapp.com",
  databaseURL:
    "https://licenta-5b33a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "licenta-5b33a",
  storageBucket: "licenta-5b33a.appspot.com",
  messagingSenderId: "130723379688",
  appId: "1:130723379688:web:0f7b92eb71649c977e8c5d",
});

export const auth = app.auth();
export default app;

//setup connection to the database
export const db = getFirestore();

export const storage = getStorage(app);
