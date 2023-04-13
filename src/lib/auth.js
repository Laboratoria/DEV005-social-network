import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// import labels from "./labels";
import { auth } from './index.js';

export const loginEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {

    })
    .catch(() => {

    });
};

export const registroUsuario = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const exit = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch(() => {
    // An error happened.
  });
};
