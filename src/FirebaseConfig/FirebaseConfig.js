import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//auth imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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
      //console.log('user created',cred.user)
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// log users in
function login(props) {
  const toSend = props;
  signInWithEmailAndPassword(auth, toSend.email, toSend.password)
    .then((cred) => {
      //console.log('user logged in', cred.user)
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

//user verification
onAuthStateChanged(auth, (user) => {
  if (user) {
    //console.log('signed in')
  } else {
    //console.log('signed out')
  }
});

export { signUp, signingOut, login, onAuthStateChanged, db };
