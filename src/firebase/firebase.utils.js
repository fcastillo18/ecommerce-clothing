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

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const shapShot = await userRef.get();

  if(!shapShot.exists){
   const { displayName, email } = userAuth;
   const createdAt = new Date();
   
   try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...aditionalData
    })
   } catch (error) {
    console.log('Error creating user', error.message);
   }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;