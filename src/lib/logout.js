import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';

export const logoutApp = () => {
  signOut(auth)
    .then(() => {
    })
    .catch(() => {

    });
};
