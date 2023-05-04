import { signInGoogle } from './googleAuth';

export const loginWithGoogle = (event) => {
  event.preventDefault();
  signInGoogle();
};
