<<<<<<< HEAD
/* eslint-disable no-console */
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export const newAccount = (email, password) => {
  const auth = getAuth(app);
=======
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { app } from './firebase';

export const newAccount = (email, password) => {
  const auth = getAuth();

>>>>>>> main
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('creado');
<<<<<<< HEAD
      console.log(user);
    // ...
=======
      // ...
>>>>>>> main
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error');
      // ..
    });
};

export const registerWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('signed up with Google');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('error signing up with Google');
      // ...
    });
};
