// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// import { async } from '@firebase/util';
import { LoginTemplate } from '../templates/loginTemplate.js';
import { auth } from '../lib/index.js';

export const Login = (onNavigate) => {
  const div = document.createElement('div');
  /* const errorMsj = document.createElement('p');
  errorMsj.id = 'errorMsj';
  errorMsj.className = 'passAndEm'; */
  div.innerHTML = LoginTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const register = div.querySelector('#linkRegister');
  register.addEventListener('click', () => {
    onNavigate('/registrate');
  });
  const loginGoogle = div.querySelector('#btn-google');
  loginGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
      onNavigate('/muro');
    } catch (error) {
      console.log(error);
    }
  });
  const signIn = div.querySelector('#signIn');
  signIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsj.textContent = '';
    const email = signIn.email.value;
    const password = signIn.password.value;
    try {
      const credentialEmail = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      onNavigate('/muro');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        errorMsj.textContent = 'Usuario invalido';
      } else if (error.code === 'auth/missing-password') {
        errorMsj.textContent = 'Ingrese contraseña';
      } else if (error.code === 'auth/wrong-password') {
        errorMsj.textContent = 'Contraseña incorrecta';
      } else if (error.code === 'auth/invalid-email') {
        errorMsj.textContent = 'Ingrese correo';
      } else if (error.code) {
        errorMsj.textContent = 'Ocurrio un error';
      }
    }
  });
  //div.append(errorMsj);//
  return div;
};
