import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZCek8ELlMH_QVvnrabtIRPJuhTleY_Qg",
  authDomain: "workout-app-c25e5.firebaseapp.com",
  projectId: "workout-app-c25e5",
  storageBucket: "workout-app-c25e5.appspot.com",
  messagingSenderId: "412361553684",
  appId: "1:412361553684:web:b95b917acb7f380b6e7401"
};

//init app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

export { onAuthStateChanged, db, auth };
