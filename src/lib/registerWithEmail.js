import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index.js';
// dry no repitas lo mismo

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('se registro', user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Errorrrrrr', errorMessage);
    // ..
    });
};
