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
} from 'firebase/firestore';
import { auth } from './firebase.js';

export const db = getFirestore();

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

// Likes
export const updateLike = (id, uid) => updateDoc(doc(db, 'posts', id), {
  likes: arrayUnion(uid),
});

export const removeLike = (id, uid) => updateDoc(doc(db, 'posts', id), {
  likes: arrayRemove(uid),
});
