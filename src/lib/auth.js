import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import {
  collection, addDoc,
} from 'firebase/firestore';
import { auth, db } from './firebase.js';

/* Ingresar con Google */
const provider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, provider);

/* Crear cuenta */
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/* Ingreso con email y password */
const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Leer post
const colPost = collection(db, 'posts');

// guardar post
const post = (postText) => {
  addDoc(colPost, {
    text: postText,
    userEmail: auth.currentUser.email,
    date: Date.now(),
  });
};

export {
  loginWithGoogle,
  createUser,
  signIn,
  colPost,
  post,
};
