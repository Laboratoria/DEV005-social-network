import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { auth } from './index.js';

export const loginEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {

    })
    .catch(() => {

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
