import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { auth } from './firebase.js';

function login(navigateTo) {
  const tittle = document.createElement('h1');
  const paragraph = document.createElement('p');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputEmail';
  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';
  const buttonLogin = document.createElement('button');
  const buttonGoBack = document.createElement('button');

  tittle.textContent = 'Login';
  paragraph.textContent = 'Regístrate para conocer mas mujeres empoderadas con ganas de viajar y conocer sus experiencias de primera mano';

  inputEmail.placeholder = 'Correo Electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Registrate';
  buttonGoBack.textContent = 'Regresar';

  inputPassword.addEventListener('input', () => {
    const password = inputPassword.value;
    const maskedPassword = '*'.repeat(password.length);
    inputPassword.value = maskedPassword;
  });
  buttonLogin.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.log('error');
    }
  });
  buttonGoBack.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(tittle, paragraph, inputEmail, inputPassword, buttonLogin, buttonGoBack);
  return form;
}
export default login;
