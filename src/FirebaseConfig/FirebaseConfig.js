import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  updateDoc,
  getDocs,
  getDoc,
  where,
} from "firebase/firestore";
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

//collection reference
const colRef = collection(db, "books");

//queries
const q = query(colRef, orderBy("createdAt"));

//get individual document
const author = query(colRef, where("author", "==", "gone"));

//real time collection data
const unsubCol = onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  //console.log(books);
});

//adding documents to server
function adds(props) {
  const toSend = props;
  addDoc(colRef, {
    name: toSend.user_name,
    email: toSend.email,
    createdAt: serverTimestamp(),
  });
}

//deleting documents from server
function deletes(props) {
  const toDelt = props;
  const docRef = doc(db, "books", toDelt.id);
  deleteDoc(docRef);
}

//get a single document
const docRef = doc(db, "books", "09wHz3cxy2zvAGTHahbw");
getDoc(docRef).then((doc) => {
  //console.log(doc.data(), doc.id)
});

const unsubDoc = onSnapshot(docRef, (doc) => {
  //  console.log(doc.data(), doc.id)
});

//update document
function updateDocs(props) {
  const toUpdate = props;
  const updateDocRef = doc(db, "books", toUpdate.id);
  updateDoc(updateDocRef, {
    title: "updated yer maa",
  }).catch((err) => {
    console.log(err.message);
  });
}

//signing users up
function signUp(props) {
  const toData = props;
  createUserWithEmailAndPassword(auth, toData.email, toData.pwd)
    .then((cred) => {
      //console.log('user created',cred.user)
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// login
function login(props) {
  const toLogin = props;
  signInWithEmailAndPassword(auth, toLogin.email, toLogin.pwd)
    .then((cred) => {
      //console.log('user logged in', cred.user)
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// signing out
function signingOut() {
  signOut(auth)
    .then(() => {
      //console.log('user signed out')
    })
    .catch((err) => {
      console.log(err.message);
    });
}
// user status
const unsubAuth = onAuthStateChanged(auth, (user) => {
  //console.log('user status changed', user)
});

//unsubscribe from real time listeners
//onSnapshot and onAuthStateChanged return an unsubscribe function. Capture them in variable so they are executed when function is invoked
function unsubbed() {
  console.log("unsubscribed");
  unsubAuth();
  unsubDoc();
  unsubCol();
}

/* get firebase data */
function getLeader(setLists) {
  getDocs(author)
    .then((response) => {
      const leaderList = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setLists(leaderList);
    })
    .catch((error) => console.log(error.message));
}

export {
  adds,
  deletes,
  updateDocs,
  signUp,
  signingOut,
  login,
  onAuthStateChanged,
  unsubbed,
  getLeader,
};
