import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase.js';

/* Ingresar con Google */
const provider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, provider);

/* Crear cuenta */
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/* Ingreso con email y password */
const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export {
  loginWithGoogle,
  createUser,
  signIn,
};
