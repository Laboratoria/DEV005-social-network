import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const signupApp = (email, password, registerError) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    })
    .catch(() => {
      registerError.textContent = 'El usuario ya existe';
    });
};

// const signupError = document.getElementById('signup-error');
