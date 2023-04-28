import { signOut, getAuth } from 'firebase/auth';

import { firebaseApp } from './firebase.js';

const auth = getAuth(firebaseApp);

export const logoutApp = (navigateTo) => {
  signOut(auth)
    .then(() => {
      navigateTo('/');
    })
    .catch(() => {
    });
};
