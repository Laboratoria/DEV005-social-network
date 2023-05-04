import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './index.js';

const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider);

export const singin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/* export const addUserToSocialNetwork = (email, password) => new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve({ message: 'success', email: user.email });
    })
    .catch((error) => {
        const errorMessage = error.message;
        reject({ message: 'error', email, errorMessage });
    });
}); */
