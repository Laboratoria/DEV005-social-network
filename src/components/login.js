import { loginConfig } from '../lib/loginConfig';

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
  loginCorreo.className = 'loginCorreo';
  loginCorreo.id = 'loginCorreo';

  const loginContra = document.createElement('input');
  loginContra.className = 'loginContra';
  loginContra.id = 'loginContra';

  const mensajelogin = document.createElement('span');
  mensajelogin.className = 'mensajelogin';
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });

  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'buttonReturn';
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
