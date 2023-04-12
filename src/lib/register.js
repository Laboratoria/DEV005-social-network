import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const signupApp = (email, password, registerError) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    })
    .catch(() => {
      registerError.textContent = 'No se pudo registrar';
    });
};
