import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLQJewWvSOhT3rsq9nxW7m2c6EWAPOSIg",
    authDomain: "e-commence-db.firebaseapp.com",
    databaseURL: "https://e-commence-db.firebaseio.com",
    projectId: "e-commence-db",
    storageBucket: "e-commence-db.appspot.com",
    messagingSenderId: "537799501293",
    appId: "1:537799501293:web:bcb1cbed86f2532ff3f3e4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
