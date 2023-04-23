/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase';

// CORREO Y CONTRASEÑA
export const newAccount = (email, password, errorElement) => {
  if (email === '' && password === '') {
    errorElement.textContent = 'Ingrese correo electrónico y contraseña';
  } else if (email === '') {
    errorElement.textContent = 'Ingrese un correo electrónico';
  } else if (password === '') {
    errorElement.textContent = 'Ingrese una contraseña.';
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errorElement.textContent = 'Ingrese un correo válido.';
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // You can do something here after a successful account creation
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          errorElement.textContent = 'El correo ya está en uso.';
        } else if (errorCode === 'auth/invalid-password') {
          errorElement.textContent = 'La contraseña debe tener al menos 6 caracteres';
        } else {
          errorElement.textContent = 'Ocurrió un error durante el registro.';
        }
      });
  }
};
// Registrar/Iniciar sesión con Google
export const accessWithGoogle = (navigateTo) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('signed up with Google');
      navigateTo('/wall');
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

// GITHUB

export const accessWithGithub = (navigateTo) => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('signed up with Github');
      console.log(result);
      navigateTo('/wall');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log('error signing up with Github');
      // ...
    });
};

export const logInWithEmail = (email, password, errorELogin) => new Promise((resolve, reject) => {
  if (email === '' && password === '') {
    errorELogin.textContent = 'Ingrese correo electrónico y contraseña';
    reject(new Error('Invalid input'));
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          errorELogin.textContent = 'El correo no está registrado.';
        } else if (errorCode === 'auth/wrong-password') {
          errorELogin.textContent = 'Contraseña incorrecta.';
        } else if (errorCode === 'auth/invalid-email') {
          errorELogin.textContent = 'Ingrese un correo electrónico válido.';
        } else {
          errorELogin.textContent = 'Ocurrió un error al intentar iniciar sesión.';
        }
        reject(new Error(errorMessage));
      });
  }
});
