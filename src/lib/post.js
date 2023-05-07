/* eslint-disable no-console */
import { collection, addDoc, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db, app, deletePost } from './firebase.js';
import { async } from 'regenerator-runtime';


// Add a new document with a generated id.
export const addPostToFirestore = async (text, user) => {
  const userIn = auth.currentUser;
  console.log('se añade');
  try{
    const docRef = await addDoc(collection(db, 'posts'), {
      text,
      user: userIn.email,
      likes: []
      // {
      //   uid: user.uid, 
      //   email: user.email,
      // }
    });
    console.log('Document written with ID: ', docRef.id);
  }
  catch (err) {
    console.log('Error', err);
  }};

//Función Firestore para borrar el post

export const deleteFirestorePost = async () => {
  console.log('funciona deleteFirestorePost');
  try {
    const deletePost = await deleteDoc(doc(db, 'posts', 'BKk0ufipfllQC3NtpKLY'));
    console.log('se borró el post ' + deletePost);
  } catch{err => {
    console.log('Error', err);
  }}
}