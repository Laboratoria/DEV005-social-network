// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtRQY-ggHLO4343_IXaN6dDpsYA9nQhhA',
  authDomain: 'mascoteando-fcfad.firebaseapp.com',
  databaseURL: 'https://mascoteando-fcfad-default-rtdb.firebaseio.com',
  projectId: 'mascoteando-fcfad',
  storageBucket: 'mascoteando-fcfad.appspot.com',
  messagingSenderId: '1072708099174',
  appId: '1:1072708099174:web:efebbf77616881bbb861a7',
  measurementId: 'G-JM74KS7VQM',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Configurando auth
export const auth = getAuth(app);

// Configurando Base de datos firestore
export const db = getFirestore();

export const savePost = (txtMascotiemos) => addDoc(collection(db, 'posts'), { txtMascotiemos });

export const getPosts = () => getDocs(collection(db, 'posts'));

// Configuracion post

const evec = collection(db, 'posts');
const q = query(evec);

export const createSnapshot = (result) => {
  const onGetPost = onSnapshot(q, (s) => {
    const dataList = [];
    s.forEach((doc) => {
      dataList.push({
        data: doc.data(),
        id: doc.id,
      });
    });
    result(dataList);
  });
  return onGetPost;
};
