import { signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

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

export const loginWithTwitter = () => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ..
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log('erorrrrrr', errorMessage);
      // ...
    });
};

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