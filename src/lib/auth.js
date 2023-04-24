import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index.js';

const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider);

export const singin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const addUserToSocialNetwork = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      resolve({ message: 'success', email: user.email });
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ message: 'error', email, errorMessage });
    });
});
