/* eslint-disable no-console */
function logIn(navigateTo) {
  const section = document.createElement('section');
  const button = document.createElement('button');

  const sectionLogin = document.createElement('section');
  sectionLogin.id = 'login-account';

  const title = document.createElement('h2');

  const inputEmailLogin = document.createElement('input');
  inputEmailLogin.id = 'email-login';
  inputEmailLogin.placeholder = 'Escribe tu correo';

  const inputPassLogin = document.createElement('input');
  inputPassLogin.id = 'contraseña-login';
  inputPassLogin.placeholder = 'Escribe tu contraseña';

  const btnLogin = document.createElement('button');
  btnLogin.id = 'validar-datos';

  title.textContent = '¡Inicia tu sesión!';
  btnLogin.textContent = 'Iniciar sesión';

  button.textContent = 'Return to home';
  button.addEventListener('click', () => {
    navigateTo('/');
    console.log(button);
  });

  title.textContent = '¡Inicia tu sesión!';

  section.append(
    title,
    inputEmailLogin,
    inputPassLogin,
    btnLogin,
    button,
  );
  return section;
}

export default logIn;
