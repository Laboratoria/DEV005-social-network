import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// import labels from "./labels";
import { auth } from './index.js';

export const loginEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    //   console.log('entro', user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      //   console.log(errorCode);
      const errorMessage = error.message;
    //   console.log(errorMessage);
    });
};

export const registroUsuario = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};
