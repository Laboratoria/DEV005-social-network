// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebaseConfig.js';

export const loginConfig = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
  } catch (error) {
    return error;
  }
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);

    console.log(credentials);
    console.log('sign in with google');
  } catch (error) {
    console.log(error);
  }
};

/*
const userChange = {};
export const obtenerUsuarioActual = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      userChange.email = user.email;
      userChange.uid = user.uid;
      userChange.displayName = user.displayName;
    }
  });
};
*/

// salir de sesión
