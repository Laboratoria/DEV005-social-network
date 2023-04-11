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

  const loginContra = document.createElement('input');
  loginContra.className = 'loginContra';

  const mensajeregister = document.createElement('span');
  mensajeregister.className = 'mensajeregister';

  const buttonReturn = document.createElement('button');

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  messageLogin.textContent = 'Iniciar Sesión';
  loginCorreo.placeholder = 'Correo Electrónico';
  loginContra.placeholder = 'Contraseña';
  mensajeregister.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate</strong>`;

  loginDiv.append(imgLogin, messageLogin, credencialesdiv);
  credencialesdiv.append(loginCorreo, loginContra);
}

export default login;
