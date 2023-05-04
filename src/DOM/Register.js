import { RegisterTemplate } from '../templates/registerTemplate.js';
import { singup } from '../lib/auth.js';

export const Register = (onNavigate) => {
  const div = document.createElement('div');
  div.innerHTML = RegisterTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const signupForm = div.querySelector('#signup');
  const email = div.querySelector('#email');
  const pass = div.querySelector('#password');
  const register = div.querySelector('#linkLogin');
  register.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsj.textContent = '';
    try {
      const userCredential = await singup(email.value, pass.value);
      errorMsj.textContent = 'Registro correcto';
      console.log(userCredential);
    } catch (error) {
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
  return div;
};
