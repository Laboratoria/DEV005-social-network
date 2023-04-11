import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RegisterTemplate } from '../templates/registerTemplate.js';
import { auth } from '../lib/index.js';

export const Register = () => {
  const div = document.createElement('div');
  const errorMsj = document.createElement('p');
  div.innerHTML = RegisterTemplate;
  const signupForm = div.querySelector('#signup');
  const email = div.querySelector('#email');
  const user = div.querySelector('#user');
  const pass = div.querySelector('#password');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsj.textContent = '';
    console.log(user.value);
    console.log(email.value, user.value, pass.value);

    if (user.value === '') {
      console.log('Empty user name');
      alert('El nombre de usuario no puede estar vacio');
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, pass.value);
      errorMsj.textContent = 'Registro correcto';
      /* console.log(userCredential); */
    } catch (error) {
      /* console.log(error.message);
      console.log(error.code); */

      if (error.code === 'auth/invalid-email') {
        errorMsj.textContent = 'Email incorrecto';
      } else if (error.code === 'auth/weak-password') {
        errorMsj.textContent = 'Porfavor, escriba una contraseña de minimo 6 caracteres';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMsj.textContent = 'Ya existe un usuario con ese correo';
      } else if (error.code) {
        errorMsj.textContent = 'Ocurrio un error';
      }
    }
  });
  div.append(errorMsj);
  return div;
};
