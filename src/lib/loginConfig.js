// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebaseConfig.js';

export const loginConfig = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((credential) => {
      signInWithEmailAndPassword(auth, email.value, password.value);
      return credential;
    })
    .catch((error) => {
      console.log(error.message);
      console.log(error.code);

      if (error.code === 'auth/email-already-in-user') {
        alert('correo en uso');
      } else if (error.code === 'auth/invalid-email') {
        alert('correo inválido');
      } else if (error.code === 'auth/weak-password') {
        alert('contraseña muy corta');
      } else {
        alert('otro problema');
      }
      return error;
    });
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
