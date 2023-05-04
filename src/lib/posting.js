import {
  getFirestore,
  addDoc, collection,
  getDocs,
  getDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  arrayRemove,
  arrayUnion,
  // Timestamp,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseApp } from './firebase.js';

export const savePost = (textPost) => {
  const auth = getAuth(firebaseApp);
  const text = textPost.value;
  addDoc(collection(getFirestore(), 'posts'), {
    text,
    author: auth.currentUser.email,
    likes: [],
    // date: Timestamp.now(),
  });
};
// Obtener las publicaciones existentes en firebase
export const getPost = () => getDocs(collection(getFirestore(), 'posts'));

// Escuchar los cambios en tiempo real
export const onGetPost = (callback) => onSnapshot(collection(getFirestore(), 'posts'), callback);

// Eliminar una publicación
export const deletePost = (id) => deleteDoc(doc(getFirestore(), 'posts', id));

// Obtener una publicación
export const getOnePost = (id) => getDoc(doc(getFirestore(), 'posts', id));

// Editar una publciación
export const editPost = (id, newFields) => updateDoc(doc(getFirestore(), 'posts', id), newFields);

// Likes
export const updateLike = (id, uid) => updateDoc(doc(getFirestore(), 'posts', id), {
  likes: arrayUnion(uid),
});

export const removeLike = (id, uid) => updateDoc(doc(getFirestore(), 'posts', id), {
  likes: arrayRemove(uid),
});
