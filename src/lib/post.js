/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { collection, addDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db, app } from './firebase.js';

// Add a new document with a generated id.
export const addPostToFirestore = async (texto, user) => {
  console.log('se añade');
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      texto,
      user: 'user@user.com',
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (err) {
    console.log('Error', err);
  }
};
