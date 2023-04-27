import {
  collection, query, updateDoc, doc,
} from 'firebase/firestore';
import { db } from './firebase.js';

export const ref = () => query(collection(db, 'posts'));

// Editar post

export const editPost = (id, text) => {
  const postRef = doc(db, 'posts', `${id}`);
  updateDoc(postRef, {
    text,
  });
};
