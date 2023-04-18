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

  const mensajelogin = document.createElement('span');
  mensajelogin.className = 'mensajelogin';
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });
  /*const buttonReturn = credencialesdiv.getElementsByClassName('buttonReturn');
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
  });*/

  messageLogin.textContent = 'Iniciar Sesión';
  mensajelogin.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate ahora</strong>`;

  loginDiv.append(imgLogin, messageLogin, credencialesdiv, mensajelogin);
  //credencialesdiv.append(loginCorreo, loginContra);
  return loginDiv;
}
export default login;
