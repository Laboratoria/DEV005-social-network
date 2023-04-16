import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';

export const logoutApp = (navigateTo) => {
  signOut(auth)
    .then(() => {
      navigateTo('/');
    })
    .catch(() => {
    });
};
