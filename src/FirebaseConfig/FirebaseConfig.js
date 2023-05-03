import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

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

//signing users up
function signUp(props) {
  const toSend = props;
  createUserWithEmailAndPassword(auth, toSend.email, toSend.password)
    .then((cred) => {
      updateProfile(auth.currentUser, {
        displayName: toSend.user_name,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// sign users out
function signingOut() {
  signOut(auth)
    .then(() => {
      //console.log('user signed out')
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export { signUp, signingOut, onAuthStateChanged, db };
