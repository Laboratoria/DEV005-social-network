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

  messageLogin.textContent = 'Iniciar Sesión';
  mensajeregister.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate</strong>`;

  loginDiv.append(imgLogin, messageLogin, credencialesdiv, mensajeregister);

  const formulario = document.querySelector('.credencialesdiv');
  console.log(formulario);

  return loginDiv;
}

export default login;
