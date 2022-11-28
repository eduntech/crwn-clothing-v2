//import { initializeApp } from "firebase/app";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDik7wVWQRNP3MICgT5FH9sjqnDmqUTtSY",
  authDomain: "crwn-clothing-db-23b94.firebaseapp.com",
  projectId: "crwn-clothing-db-23b94",
  storageBucket: "crwn-clothing-db-23b94.appspot.com",
  messagingSenderId: "852513341051",
  appId: "1:852513341051:web:2b46e77c98eb117a7b2cde",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const UserDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(UserDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  //if uer data exists

  //if userdata does not exist
  // create and set the document with the data from userAuth in my collection

  //return userDocRef
};
