// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, // conexión
  collection, // crear una tabla con los datos
  addDoc, // añadir documentos
  getDocs, // escucha y traer los cambios de los datos
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACdLyMpGhBbp5ogyQ2z2-GeDWz4orx4Z4',
  authDomain: 'foodmatch-5bf52.firebaseapp.com',
  projectId: 'foodmatch-5bf52',
  storageBucket: 'foodmatch-5bf52.appspot.com',
  messagingSenderId: '655316254171',
  appId: '1:655316254171:web:2bb64d10e33715580a7bfe',
};

// Initialize Firebase console.log(app)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Conexión a la base de datos
const db = getFirestore(app);
// Guardar publicación en firestore
export const saveTask = (description) => {
  addDoc(collection(db, 'post'), { description });
  // nombre de la colección "post",
  // donde se van a guardar los datos
};
// traer los post guardados en firestore
export const getTask = () => getDocs(collection(db, 'post'));

// onSnapshot -> para que escuche los cambios y se vea en tiempo real
export const onGetTasks = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deleteTask = (id) => deleteDoc(doc(db, 'post', id));
