import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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

  }).catch(() => {

  });
};

export const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then(() => {

    })
    .catch(() => {

    });
};
