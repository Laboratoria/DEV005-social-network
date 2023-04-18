import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig.js';

function login(navigateTo) {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'loginDiv';

  const imgLogin = document.createElement('div');
  imgLogin.className = 'imgLogin';

  const messageLogin = document.createElement('h2');
  messageLogin.className = 'messageLogin';

  const credencialesdiv = document.createElement('form');
  credencialesdiv.className = 'credencialesdiv';
  credencialesdiv.setAttribute('id', 'formulario');

  credencialesdiv.innerHTML = '';
  credencialesdiv.innerHTML = '<input type="email" class="loginCorreo" placeholder="Correo Electrónico" required><input type="password" class="loginContra" placeholder="Contraseña" required><button class="buttonReturn" type="submit">Ingresar</button>';

  const mensajeregister = document.createElement('span');
  mensajeregister.className = 'mensajeregister';
  mensajeregister.addEventListener('click', () => {
    navigateTo('/register');
  });
  buttonReturn.className = 'buttonReturn';

  messageLogin.textContent = 'Iniciar Sesión';
  mensajeregister.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate</strong>`;
  buttonReturn.textContent = 'Ingresar';

  loginDiv.append(imgLogin, messageLogin, credencialesdiv);
  credencialesdiv.append(loginCorreo, loginContra);
}

export default login;
