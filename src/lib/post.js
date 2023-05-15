/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
import {
  collection, addDoc, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove, getDocs, query, onSnapshot, serverTimestamp, orderBy,
} from 'firebase/firestore';
import {
  auth, db,
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
export const likePost = (userEmail, idDoc) => updateDoc(doc(db, 'posts', idDoc), { likes: arrayUnion(userEmail) });

// Función Firestore para quitar Like
export const dislikePost = (userEmail, idDoc) => updateDoc(doc(db, 'posts', idDoc), { likes: arrayRemove(userEmail) });

export { onSnapshot, doc, orderBy };

export function updatePostFirestore(idDoc, newText) {
  const docRef = doc(db, 'posts', idDoc);
  updateDoc(docRef, { text: newText })
    .then(() => console.log('Post updated successfully'))
    .catch((error) => console.error('Error updating post:', error));
}
