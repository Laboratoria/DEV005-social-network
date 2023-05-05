import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

import logo from '../assets/logo.png';

function singUp() {
  const templateSingUp = `<header>
    <img id="registerImg" src=${logo} alt="Logo" />
  </header>
  <main>
    <label id="register">
      <h1 class="welcome">Registro</h1>
    </label>
    <form class="container" id="container">
      <label for="email" class="email">Email</label>
      <input type="email" id="signup-email" class="text" value="" required placeholder="mariaX@gmail.com" autocomplete="username" />
      <label for="password" class="password">Contraseña</label>
      <input type="password" id="signup-password" class="text" value="" minlength="6" maxlength="16" required pattern="^[\\p{L}]\${1, 25}" placeholder="******" autocomplete="new-password" />
      <button type="submit" id="singUp">Registrar</button>
</form>`;
  return templateSingUp;
}

function singUpPostRender() {
  const signUpForm = document.querySelector('#container');

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;
    console.log(email, password);

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
    } catch (error) {
      console.log(error);
    }
  });
}

export default {
  component: singUp,
  postRender: singUpPostRender,
};
