import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'




const config = {
    apiKey: "AIzaSyBfjgLxztlwfrItAdTNs6TjYjeq3Gl_yAg",
    authDomain: "crwn-db-4fcdf.firebaseapp.com",
    databaseURL: "https://crwn-db-4fcdf.firebaseio.com",
    projectId: "crwn-db-4fcdf",
    storageBucket: "crwn-db-4fcdf.appspot.com",
    messagingSenderId: "435763228299",
    appId: "1:435763228299:web:a94f0260e1d74f3549ee8e",
    measurementId: "G-D654RDPCT8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;