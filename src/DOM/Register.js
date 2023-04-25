/* eslint-disable no-console */
/* import { createUserWithEmailAndPassword } from 'firebase/auth'; */
import { RegisterTemplate } from '../templates/registerTemplate.js';
/* import { auth } from '../lib/index.js'; */
import { singup } from '../lib/auth.js';

export const Register = (onNavigate) => {
  const div = document.createElement('div');
  // const errorMsj = document.createElement('p');//
  div.innerHTML = RegisterTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const signupForm = div.querySelector('#signup');
  const email = div.querySelector('#email');
  const user = div.querySelector('#user');
  const pass = div.querySelector('#password');
  const register = div.querySelector('#linkLogin');
  // const btnRegister = div.querySelector('#btn-register');
  // eslint-disable-next-line no-shadow
  register.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsj.textContent = '';
    console.log(user.value);
    console.log(email.value, user.value, pass.value);
    try {
      const userCredential = await singup(email.value, pass.value);
      errorMsj.textContent = 'Registro correcto';
      console.log(userCredential);
    } catch (error) {
      /* console.log(error.message);
      console.log(error.code); */

      if (error.code === 'auth/invalid-email') {
        errorMsj.textContent = 'Email incorrecto';
      } else if (error.code === 'auth/weak-password') {
        errorMsj.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMsj.textContent = 'Ya existe un usuario con ese correo';
      } else if (error.code) {
        errorMsj.textContent = 'Ocurrio un error';
      }
    }
  });
  // div.append(errorMsj);//
  return div;
};
