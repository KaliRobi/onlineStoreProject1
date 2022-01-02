
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =
{
    apiKey: "AIzaSyDSjg0LOjf0ueAg5qWhA4PJv3zmi7YkNHw",
    authDomain: "clothing-664f4.firebaseapp.com",
    projectId: "clothing-664f4",
    storageBucket: "clothing-664f4.appspot.com",
    messagingSenderId: "741601506824",
    appId: "1:741601506824:web:c8531e647ad90e22a883bd",
    
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    // we can call object via firestore.doc('/users/:userId');
    // firestore.collections('/users')

    const userRef = firestore.doc(`user/${userAuth.uid}`)
    // so we will see if the exists shows false or true, in the documentsnapshot 

    const snapShot =  await userRef.get()
    // we need to chck the exists in the documentSnapshot.

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createAt = new Date();

    

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }
    catch(error){
        console.log('error creating user', error.message)
    }
  }
 return userRef;
  }

  export const auth  = firebase.auth(); // it is imported
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propt:  'select_account'});
  export const signInWithGoogle = () => 
  {
    firebase.auth().signInWithPopup(provider);
    console.log(auth)
  }


// document reference is where we are suning the CRUD
// .set, .get, update, .delete
// we get the snapshotObject from the refrenceObject using get 

//.get gets the snapshot documentRef.get() collectionRef.get()