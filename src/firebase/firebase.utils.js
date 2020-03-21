import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkYB2SET8NTypLfJa8OqY9vUuOh-emeTM",
    authDomain: "crwn-db-4f8d2.firebaseapp.com",
    databaseURL: "https://crwn-db-4f8d2.firebaseio.com",
    projectId: "crwn-db-4f8d2",
    storageBucket: "crwn-db-4f8d2.appspot.com",
    messagingSenderId: "19934380531",
    appId: "1:19934380531:web:2f4c0396c51ccff7a49286",
    measurementId: "G-HZH02J9G99"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;