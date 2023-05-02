import { GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { LoginTemplate } from '../templates/loginTemplate.js';
import { auth } from '../lib/index.js';
import { loginGoogle, singin } from '../lib/auth.js';

export const Login = (onNavigate) => {
  const body = document.querySelector('body');
  body.className = '';
  const div = document.createElement('div');
  div.innerHTML = LoginTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const validate = onAuthStateChanged(auth, async (user) => {
    if (user) {
      onNavigate('/muro');
    }
  });

  const register = div.querySelector('#linkRegister');
  register.addEventListener('click', () => {
    onNavigate('/registrate');
  });

  // VERSION ASYNC - AWAIT
  const btnloginGoogle = div.querySelector('#btn-google');
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
        console.log('No se ha iniciado sesion', error);
      });
  });

  const signIn = div.querySelector('#signIn');
  const mail = div.querySelector('#email');
  const pass = div.querySelector('#password');
  signIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsj.textContent = '';
    singin(mail.value, pass.value)
      .then((ok) => {
        console.log('login correcto', ok);
        validate();
      })
      .catch((error) => {
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
      });
  });
  return div;
};
