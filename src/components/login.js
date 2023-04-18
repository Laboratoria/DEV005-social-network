import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig.js';

function login(navigateTo) {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'loginDiv';

  const imgLogin = document.createElement('div');
  imgLogin.className = 'imgLogin';

  const messageLogin = document.createElement('h2');
  messageLogin.className = 'messageLogin';

  const credencialesdiv = document.createElement('div');
  credencialesdiv.className = 'credencialesdiv';

  const loginCorreo = document.createElement('input');
  loginCorreo.setAttribute('type', 'text');
  loginCorreo.className = 'loginCorreo';

  const loginContra = document.createElement('input');
  loginContra.className = 'loginContra';

  const mensajelogin = document.createElement('span');
  mensajelogin.className = 'mensajelogin';
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });

  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'buttonReturn';
  buttonReturn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementsByClassName('#loginCorreo');
    const password = document.getElementsByClassName('#loginContra');

    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value,
      );
      console.log(credentials);
      navigateTo('/muro');
    } catch (error) {
      console.log(error);
      console.log(error.code);

      if (error.code === 'auth/user-not-found') {
        alert('correo en uso');
      } else if (error.code === 'auth/invalid-email') {
        alert('correo inválido');
      } else if (error.code === 'auth/weak-password') {
        alert('contraseña muy corta');
      } else {
        alert('otro problema');
      }
    }
  });
  buttonReturn.className = 'buttonReturn';

  messageLogin.textContent = 'Iniciar Sesión';
  loginCorreo.placeholder = 'Correo Electrónico';
  loginContra.placeholder = 'Contraseña';
  mensajelogin.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate</strong>`;
  buttonReturn.textContent = 'Ingresar';

  loginDiv.append(
    imgLogin,
    messageLogin,
    credencialesdiv,
    buttonReturn,
    mensajelogin,
  );
  credencialesdiv.append(loginCorreo, loginContra);
  return loginDiv;
}

export default login;
