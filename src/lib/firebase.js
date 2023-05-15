/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, orderBy, query, deleteDoc, doc, updateDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2XzW4fsAKMIk0abnb-ci8hDkR9quGwhc',
  authDomain: 'sn9-kittybook.firebaseapp.com',
  projectId: 'sn9-kittybook',
  storageBucket: 'sn9-kittybook.appspot.com',
  messagingSenderId: '937610887049',
  appId: '1:937610887049:web:30a547f749f49fbc57eb58',
  measurementId: 'G-CRTBR015F5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
