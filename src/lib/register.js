import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

const btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener('submit', async (event) => {
  event.preventDefault();
  const signupEmail = document.getElementById('signup-email');
  const signupPassword = document.getElementById('signup-password');

  const email = signupEmail.value;
  const password = signupPassword.value;
  console.log(signupEmail, signupPassword);

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
});

// const signupError = document.getElementById('signup-error');
