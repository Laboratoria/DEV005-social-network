import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const signupApp = (email, password, registerError) => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
    })
    .catch(() => {
      password.value = '';
      registerError.textContent = 'No se pudo registrar';
    });
};
