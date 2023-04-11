import { loginFormSubmit, labelMovement } from '../lib/index.js';

export function login(navigateTo) {
  const navegateToSignup = () => {
    const preventRefresh = (event) => {
      event.preventDefault();
      navigateTo('/signup');
    }; return preventRefresh;
  };
  // Contenedor login
  const loginContainer = document.createElement('section');
  loginContainer.classList.add('login-container');

  // Formulario
  const loginForm = document.createElement('form');
  loginForm.classList.add('login-form');

  // Título Playverse
  const nameTitle = document.createElement('h1');
  nameTitle.textContent = 'PLAYVERSE';
  loginForm.append(nameTitle);

  // Contenedor del correo
  const emailContainer = document.createElement('div');
  emailContainer.classList.add('group');

  const labelEmail = document.createElement('label');
  labelEmail.classList.add('login');
  labelEmail.textContent = 'Correo';
  labelEmail.setAttribute('for', 'email');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inp-login');
  inputEmail.id = 'email';
  inputEmail.type = 'email';
  labelMovement(inputEmail, labelEmail);

  // Añadir los elementos del  contenedor Email
  emailContainer.append(labelEmail, inputEmail);

  // Contenedor contraseña
  const passwordContainer = document.createElement('div');
  passwordContainer.classList.add('group');

  const labelPassword = document.createElement('label');
  labelPassword.classList.add('login');
  labelPassword.textContent = 'Contraseña';
  labelPassword.setAttribute('for', 'password');

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inp-login');
  inputPassword.id = 'password';
  inputPassword.type = 'password';
  labelMovement(inputPassword, labelPassword);

  // Añadir los elementos del  contenedor Constraseña
  passwordContainer.append(labelPassword, inputPassword);

  // ¡No tienes una cuenta?
  const linkContainer = document.createElement('div');
  linkContainer.classList.add('content-link');

  const linkText = document.createElement('p');
  linkText.classList.add('link-text');
  linkText.textContent = '¿No tienes una cuenta?';
  linkContainer.append(linkText);

  const links = document.createElement('a');
  links.classList.add('links');
  links.href = '';
  links.textContent = 'Regístrate';
  links.addEventListener('click', navegateToSignup());
  linkText.append(links);
  // Mensaje de error
  const loginError = document.createElement('div');
  loginError.classList.add('link-text');
  loginError.id = 'login-error';
  loginError.textContent = '';

  // Agrega el evento de envío de formulario a la función manejadora
  loginForm.addEventListener('submit', loginFormSubmit(inputEmail, inputPassword, loginError));

  // Botón Iniciar Sesión
  const btnLogin = document.createElement('button');
  btnLogin.classList.add('btn-login');
  btnLogin.id = 'btn-login';
  btnLogin.type = 'submit';
  btnLogin.textContent = 'Iniciar sesión';

  // Añadir elementos del form
  loginForm.append(emailContainer, passwordContainer, loginError, btnLogin, linkContainer);

  // O regístrate con
  const textContainer = document.createElement('div');
  textContainer.classList.add('content-text');

  const text = document.createElement('p');
  text.classList.add('link-text');
  text.textContent = 'También puedes';
  textContainer.append(text);

  // Contenedor para el botón de continuar con google e ícono
  const googleContainer = document.createElement('div');
  googleContainer.classList.add('google-container');

  const btnGoogle = document.createElement('button');
  btnGoogle.classList.add('google-btn');
  btnGoogle.textContent = 'continuar con Google';
  googleContainer.append(btnGoogle);

  // Contenedor imagen google

  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'images/google.png';
  imgGoogle.classList.add('google-icon');
  imgGoogle.alt = 'Logo Google';
  btnGoogle.prepend(imgGoogle);

  // Añadir elementos a la section
  loginContainer.append(loginForm, textContainer, googleContainer);
  // Darle  movimiento a los labels
  return loginContainer;
}
