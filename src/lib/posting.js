import {
  getFirestore, addDoc, collection, getDocs, onSnapshot, deleteDoc, doc,
} from 'firebase/firestore';

const db = getFirestore();

export const savePost = (textPost) => {
  const text = textPost.value;
  addDoc(collection(db, 'posts'), { text });
  textPost.value = '';
};

// Obtener los post existentes en firebase
export const getPost = () => getDocs(collection(db, 'posts'));

// Escuchar los cambios en tiempo real
export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

// Eliminar post
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
