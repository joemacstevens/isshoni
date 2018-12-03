import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBLRSWmMU2TrQKZOrapIoadDTO8yLmB5CA",
    authDomain: "isshoni-1c63d.firebaseapp.com",
    databaseURL: "https://isshoni-1c63d.firebaseio.com",
    projectId: "isshoni-1c63d",
    storageBucket: "isshoni-1c63d.appspot.com",
    messagingSenderId: "781170060357"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();