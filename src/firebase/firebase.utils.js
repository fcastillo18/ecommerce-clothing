import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBq6RLHnPhlbeyhbO3bScjQ4H2r-NYeWa8",
  authDomain: "crwn-db-f9293.firebaseapp.com",
  projectId: "crwn-db-f9293",
  storageBucket: "crwn-db-f9293.appspot.com",
  messagingSenderId: "729804807860",
  appId: "1:729804807860:web:cdbaed8b91120887c681e1",
  measurementId: "G-DETCCXHPJ5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;