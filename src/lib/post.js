import {
  collection, query, updateDoc, doc, deleteDoc, addDoc, arrayUnion, arrayRemove,
} from 'firebase/firestore';
import { db, auth } from './firebase.js';

export const ref = () => query(collection(db, 'posts'));

// Leer post
const colPost = collection(db, 'posts');

// guardar post
export const post = (postText) => {
  addDoc(colPost, {
    text: postText,
    userEmail: auth.currentUser.email,
    likes: [],
  });
};

// Editar post

export const editPost = (id, text) => {
  const postRef = doc(db, 'posts', `${id}`);
  updateDoc(postRef, {
    text,
  });
};

// Eliminar post

export const deleteDocData = (id) => {
  deleteDoc(doc(db, 'posts', `${id}`));
};

// Dar Like
export const like = (id, email) => {
  const postRef = doc(db, 'posts', `${id}`);
  updateDoc(postRef, {
    likes: arrayUnion(email),
  });
};

// Dislike
export const disLike = (id, email) => {
  const postRef = doc(db, 'posts', `${id}`);
  updateDoc(postRef, {
    likes: arrayRemove(email),
  });
};
