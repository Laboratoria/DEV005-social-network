/* eslint-disable no-console */
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { async } from '@firebase/util';
import { GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { LoginTemplate } from '../templates/loginTemplate.js';
import { auth } from '../lib/index.js';
import { loginGoogle } from '../lib/auth.js';

export const Login = (onNavigate) => {
  const body = document.querySelector('body');
  body.className = '';
  const div = document.createElement('div');
  /* const errorMsj = document.createElement('p');
  errorMsj.id = 'errorMsj';
  errorMsj.className = 'passAndEm'; */
  div.innerHTML = LoginTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const validate = onAuthStateChanged(auth, async (user) => {
    if (user) {
      onNavigate('/muro');
    } else {
      console.log('error');
    }
  });

  const register = div.querySelector('#linkRegister');
  register.addEventListener('click', () => {
    onNavigate('/registrate');
  });

  const btnloginGoogle = div.querySelector('#btn-google');
  // VERSION ASYNC - AWAIT
  /*   btnloginGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await loginGoogle();
      console.log(credentials);
      onNavigate('/muro');
    } catch (error) {
      console.log(error);
    }
  });
 */
  // VERSION PROMESAS
  btnloginGoogle.addEventListener('click', () => {
    loginGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential, token, user);
        validate();
      }).catch((error) => {
        console.log(error);
      });
  });

  const signIn = div.querySelector('#signIn');
  signIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsj.textContent = '';
    const email = signIn.email.value;
    const password = signIn.password.value;
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      validate();
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
  // div.append(errorMsj);//
  return div;
};
