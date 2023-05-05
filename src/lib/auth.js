import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { auth } from './index.js';

export const loginEmail = (email, password, errorEmail, errorPassword) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {

    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        errorPassword.innerHTML = 'Contraseña incorrecta';
      } else if (error.code === 'auth/invalid-email') {
        errorEmail.innerHTML = 'Correo inválido';
      } else if (error.code === 'auth/user-not-found') {
        errorEmail.innerHTML = 'Usuario no encontrado';
      } else if (error.code) {
        errorPassword.innerHTML = 'Algo salió mal';
      }
    });
};

export const userRegister = (email, password, errorEmail, errorPassword) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {

    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        errorEmail.innerHTML = 'Usuario ya registrado';
      } else if (error.code === 'auth/invalid-email') {
        errorEmail.innerHTML = 'Correo inválido';
      } else if (error.code === 'auth/weak-password') {
        errorPassword.innerHTML = 'Contraseña demasiado débil';
      } else if (error.code === 'auth/missing-password') {
        errorPassword.innerHTML = 'Contraseña requerida';
      } else if (error.code) {
        errorPassword.innerHTML = 'Algo salió mal';
      }
    });
};

// Función cerrar que se exporta a home
export const exit = () => {
  signOut(auth).then(() => {

  }).catch(() => {

  });
};

export const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then(() => {

    })
    .catch(() => {

    });
};
