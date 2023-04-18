import { loginConfig } from '../lib/loginConfig';

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
    const email = document.getElementById('loginCorreo').value;
    const password = document.getElementById('loginContra').value;
    loginConfig(email, password)
      .then(() => {
        console.log(email, password);
        navigateTo('/muro');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('no esta registrado');
        } else if (error.code === 'auth/wrong-password') {
          alert('contraseña incorrecta');
        } else {
          console.log(error.message);
        }
        return error;
      });
  });

  messageLogin.textContent = 'Iniciar Sesión';
  mensajelogin.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate ahora</strong>`;

  loginDiv.append(imgLogin, messageLogin, credencialesdiv, mensajelogin);
  //credencialesdiv.append(loginCorreo, loginContra);
  return loginDiv;
}
export default login;
