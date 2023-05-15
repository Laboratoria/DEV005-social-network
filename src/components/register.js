/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import { newAccount, accessWithGoogle, accessWithGithub } from '../lib/auth';

// Creación sección registro
function register(navigateTo) {
  const sectionReg = document.createElement('section');
  sectionReg.id = 'reg-account';
  sectionReg.classList.add('register-background');
  const titleRegKitty = document.createElement('h1');
  titleRegKitty.id = 'title';
  const titleReg = document.createElement('h3');
  const divContainer = document.createElement('div');
  titleReg.id = 'register-title';
  const inputEmail = document.createElement('input');
  const regTrademark = document.createElement('footer');
  divContainer.id = 'container';
  divContainer.classList.add('signup-container');
  regTrademark.id = 'marca';
  inputEmail.id = 'email';
  inputEmail.placeholder = 'Escribe tu correo';
  const inputPass = document.createElement('input');
  inputPass.id = 'contraseña';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type = 'password';
  const btnSend = document.createElement('button');
  btnSend.id = 'send-info';
  btnSend.type = 'submit';

  // Creación botón Registrar con Google
  const btnRegWithGoogle = document.createElement('button');
  btnRegWithGoogle.classList.add('google-reg-btn');
  btnRegWithGoogle.id = 'google-reg';
  const signUpGoogleIcon = document.createElement('img');
  signUpGoogleIcon.id = 'google-icon';
  signUpGoogleIcon.src = '/images/icon-google.png';
  signUpGoogleIcon.alt = 'google icon';

  // Creación botón Registrar con GitHub
  const btnRegWithGithub = document.createElement('button');
  btnRegWithGithub.classList.add('github-reg-btn');
  btnRegWithGithub.id = 'github-reg';
  const signUpGithubIcon = document.createElement('img');
  signUpGithubIcon.id = 'github-icon';
  signUpGithubIcon.src = '/images/icon-github.png';
  signUpGithubIcon.alt = 'github icon';

  // Texto de error al registrar
  const errorElement = document.createElement('h3');
  errorElement.classList.add('error-element');
  errorElement.textContent = '';

  // Título registro de KittyBook
  titleRegKitty.classList.add('title-reg-kitty');
  titleRegKitty.textContent = 'KittyBook';
  titleReg.textContent = '¡Regístrate!';
  titleReg.classList.add('title-registrate');
  btnSend.textContent = 'Registrarme';
  btnRegWithGoogle.textContent = 'Regístrate con Google';
  btnRegWithGithub.textContent = 'Regístrate con GitHub';
  regTrademark.textContent = 'KittyBook, 2023';

  // Sección para tablets y dekstop
  const infoCont = document.createElement('section');
  infoCont.id = 'info-cont';
  const infoTxt = document.createElement('p');
  infoTxt.id = 'info-text';
  infoTxt.textContent = `¿Tienes un gatito? ¡En KittyBook puedes presumirlo!
  Publica ideas e imágenes para compartir información gatuna.`;

  // Creación botón Volver al Inicio
  const btnReturnH = document.createElement('button');
  btnReturnH.id = 'return';
  btnReturnH.textContent = 'Volver al Inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  btnSend.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    newAccount(email, password, errorElement);
  });

  btnRegWithGoogle.addEventListener('click', () => {
    accessWithGoogle(navigateTo);
  });

  btnRegWithGithub.addEventListener('click', () => {
    accessWithGithub(navigateTo);
  });

  divContainer.append(
    inputEmail,
    inputPass,
    btnSend,
    btnRegWithGoogle,
    btnRegWithGithub,
    errorElement,
  );
  sectionReg.append(
    titleRegKitty,
    infoCont,
    titleReg,
    divContainer,
    btnReturnH,
    regTrademark,
  );

  infoCont.append(infoTxt);
  btnRegWithGoogle.append(signUpGoogleIcon);
  btnRegWithGithub.append(signUpGithubIcon);
  return sectionReg;
}
export default register;
