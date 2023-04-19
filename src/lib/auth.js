import {
  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

/* Ingreso con email
export const signUpForm = document.querySelector('.register');
signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signUpForm.querySelector('#email').value;
  const password = signUpForm.querySelector('#password').value;

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  console.log(userCredential);
  signUpForm.reset();
});*/

// Ingrsar con Google
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Comentario', user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log('erorrrrrr', errorMessage);
      // ...
    });
};
