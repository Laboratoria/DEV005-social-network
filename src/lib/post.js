import { collection, addDoc, doc } from 'firebase/firestore';
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
  catch{err => {
    console.log('Error', err);
  }}
};

export const deleteFirestorePost = async () => {
  const idRef = doc(collection(db, 'posts'));
  console.log('funciona deleteFirestorePost');
  try {
    const deletePost = await deleteDoc(doc(db, 'posts', idRef.id));
    console.log('se borró el post ' + deletePost);
  } catch{err => {
    console.log('Error', err);
  }}
}
