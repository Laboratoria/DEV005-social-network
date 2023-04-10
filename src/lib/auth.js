import { signInWithEmailAndPassword } from 'firebase/auth';
import { navigateTo } from '../main.js';
import { auth } from './firebase.js';

const loginErrorMessage = 'Correo o contraseña incorrecta';

const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
const loginError = document.getElementById('login-error');

const loginWithEmailPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigateTo('/wall');
  } catch (error) {
    loginError.textContent = loginErrorMessage;
  }
};

export const handleLoginEmail = async () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  await loginWithEmailPassword(email, password);

  loginPassword.value = '';
};
