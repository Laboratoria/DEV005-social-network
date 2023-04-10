import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

const btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener('submit', async (event) => {
  event.preventDefault();
  const singupEmail = document.getElementById('singup-email');
  const singupPassword = document.getElementById('singup-password');

  const email = singupEmail.value;
  const password = singupPassword.value;
  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
});

// const singupError = document.getElementById('singup-error');
