import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// import labels from "./labels";
import { auth } from './index.js';

export const loginEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
    // Signed in
    //   console.log('entro', user);
    // ...
    })
    .catch(() => {
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
    // console.log(errorMessage);
    });
};

export const registroUsuario = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};
