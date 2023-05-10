import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPepAg7ifNL3Rp7XMs8yDafA_NwYhn840",
  authDomain: "workout-app-75346.firebaseapp.com",
  projectId: "workout-app-75346",
  storageBucket: "workout-app-75346.appspot.com",
  messagingSenderId: "517536540755",
  appId: "1:517536540755:web:2d74e4a033b77e9439fea6",
};

//init app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

export { onAuthStateChanged, db, auth };
