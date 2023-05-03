/* eslint-disable no-console */
import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db, app } from './firebase.js';

// Add a new document with a generated id.
export const addPostToFirestore = async (text, user) => {
  console.log('se añade');
  try{
    const docRef = await addDoc(collection(db, 'posts'), {
      text,
      user: {
        uid: user.uid, 
        email: user.email,
      }
    });
    console.log('Document written with ID: ', docRef.id);
  }
  catch (err) {
    console.log('Error', err);
  }};

//Función para borrar el post
export const deleteFirestorePost = async () => {
  console.log('funciona');
  try {
    const deletePost = await deleteDoc(doc(db, 'posts', '0uQpkETAlEftkN4vKfwK'));
    console.log('se borró el post ' + deletePost);
  } catch{err => {
    console.log('Error', err);
  }}
}

export const actPost = onSnapshot(doc(db, 'sn9-kittybook', 'posts'), (doc) => {
  console.log("Current data: ", doc.data('posts'));
});
