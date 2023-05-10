/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  collection, addDoc, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove, getDocs, query, onSnapshot, serverTimestamp, orderBy,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import {
  auth, db, app, deletePost,
} from './firebase.js';

// Add a new document with a generated id.
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
// Función para traer los post desde Firestore
export const addPostFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
  });
};
export const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

// Función para eliminar un post de Firestore
export const deletePostFromFirestore = (id) => deleteDoc(doc(db, 'posts', id));

// Función Firestore para dar Like
export const likePost = async (doc) => {
  console.log('función dar like');
  const userIn = auth.currentUser;
  try {
    const postId = doc;
    const postRef = collection(doc(db, 'posts', postId));
    console.log(postId.id);
    const likeArray = await updateDoc(postRef, {
      likes: arrayUnion(userIn.email),
    });
    console.log(likeArray);
  } catch (err) {
    console.log('Error', err);
  }
};
// Función Firestore para quitar Like
export const dislikePost = async () => {
  console.log('función quitar like');
  const userIn = auth.currentUser;
  try {
    const postRef = doc(db, 'posts', userIn);
    const dislikeArray = await updateDoc(postRef, {
      likes: arrayRemove(userIn.email),
    });
    console.log(dislikeArray);
  } catch (err) {
    console.log('Error', err);
  }
};
export { onSnapshot, doc, orderBy };
