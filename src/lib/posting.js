import {
  getFirestore, addDoc, collection, getDocs, getDoc, onSnapshot, deleteDoc, updateDoc, doc,
} from 'firebase/firestore';
import { auth } from './firebase.js';

const db = getFirestore();
// Obtener el id del usuario actual
// export const getUser = async () => new Promise((resolve) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const userId = user.uid;
//       resolve(userId);
//     }
//   });
// });

export const savePost = (textPost) => {
  const text = textPost.value;
  addDoc(collection(db, 'posts'), {
    text,
    author: auth.currentUser.email,
    likes: [],
  });
};

// Obtener las publicaciones existentes en firebase
export const getPost = () => getDocs(collection(db, 'posts'));

// Escuchar los cambios en tiempo real
export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

// Eliminar una piblicación
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

// Obtener una publicación
export const getOnePost = (id) => getDoc(doc(db, 'posts', id));

// Editar una publciación
export const editPost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);
