/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  collection, addDoc, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove, query, onSnapshot, serverTimestamp, orderBy,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import {
  auth, db, app, deletePost,
} from './firebase.js';
// Add a new post
export const addPostToFirestore = async (text, user) => {
  const userIn = auth.currentUser;
  console.log('se añade');
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      text,
      user: userIn.email,
      likes: [],
      timestamp: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (err) {
    console.log('Error', err);
  }
};

export const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

// Función para eliminar un post de Firestore
export const deletePostFromFirestore = (id) => deleteDoc(doc(db, 'posts', id));

// Función Firestore para dar Like
export const likePost = (userEmail, idDoc) => updateDoc(doc(db, 'posts', idDoc), { likes: arrayUnion(userEmail) });

// Función Firestore para quitar Like
export const dislikePost = (userEmail, idDoc) => updateDoc(doc(db, 'posts', idDoc), { likes: arrayRemove(userEmail) });

export { onSnapshot, doc, orderBy };
