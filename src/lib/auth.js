/* eslint-disable no-console */
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export const newAccount = (email, password) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('creado');
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error');
    // ..
    });
};
