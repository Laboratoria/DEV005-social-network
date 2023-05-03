/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { collection, addDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db, app, deletePost } from './firebase.js';
import { async } from 'regenerator-runtime';

// Add a new document with a generated id.
export const addPostToFirestore = async (texto, user) => {
  console.log('se añade');
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      texto, //texto de la db
      user: 'user@user.com',
    });
    console.log('Document written with ID: ', docRef.id);
} catch{err => {
  console.log('Error', err);
}}
}

export const deleteFirestorePost = async () => {
  console.log('funciona');
  try {
    const deletePost = await deleteDoc(doc(db, 'posts', '0uQpkETAlEftkN4vKfwK'));
    console.log('se borró el post ' + deletePost);
  } catch{err => {
    console.log('Error', err);
  }}
}
