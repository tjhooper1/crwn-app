import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxHmNQPwDbR3aizG8AyEQsYfKwLaDoi3k",
    authDomain: "crown-db-255c2.firebaseapp.com",
    databaseURL: "https://crown-db-255c2.firebaseio.com",
    projectId: "crown-db-255c2",
    storageBucket: "",
    messagingSenderId: "818463958036",
    appId: "1:818463958036:web:4537526cd966eeb9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

