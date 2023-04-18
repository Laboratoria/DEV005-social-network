/* eslint-disable prefer-promise-reject-errors */
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const signIn = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      resolve({ message: 'fine' });
    })
    .catch((error) => {
      reject({ message: error.message });
    });
});
