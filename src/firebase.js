import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkax29m4a4vRo3weDcEaGR9C9UY8pn_XY",
    authDomain: "messenger-clone-c01c8.firebaseapp.com",
    projectId: "messenger-clone-c01c8",
    storageBucket: "messenger-clone-c01c8.appspot.com",
    messagingSenderId: "177288502738",
    appId: "1:177288502738:web:f50db1763e0c8f6ab3bc0b",
    measurementId: "G-R3LFZT6XJG"
});

const db = firebaseApp.firestore();
export default db;
