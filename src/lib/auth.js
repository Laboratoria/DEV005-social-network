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
