/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import { newAccount, accessWithGoogle, accessWithGithub } from '../lib/auth';

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
  // const inputName = document.createElement('input');
  // inputName.id = 'full-name';
  // inputName.placeholder = 'Nombre completo';
  // const inputUser = document.createElement('input');
  // inputUser.id = 'nombre-usuario';
  // inputUser.placeholder = 'Tu usuario';
  const inputPass = document.createElement('input');
  inputPass.id = 'contraseña';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type = 'password';
  // const inputConfirmPass = document.createElement('input');
  // inputConfirmPass.id = 'confirmar-contra';
  // inputConfirmPass.placeholder = 'Confirma tu contraseña';
  const btnSend = document.createElement('button');
  btnSend.id = 'send-info';
  btnSend.type = 'submit';
  const btnRegWithGoogle = document.createElement('button');
  btnRegWithGoogle.classList.add('google-reg-btn');
  btnRegWithGoogle.id = 'google-reg';

  const btnRegWithGithub = document.createElement('button');
  btnRegWithGithub.classList.add('github-reg-btn');
  btnRegWithGithub.id = 'github-reg';

  const errorElement = document.createElement('h3');
  errorElement.classList.add('error-element');
  errorElement.textContent = '';

  titleRegKitty.classList.add('title-reg-kitty');
  titleRegKitty.textContent = 'KittyBook';
  titleReg.textContent = '¡Regístrate!';
  titleReg.classList.add('title-registrate');
  btnSend.textContent = 'Registrarme';
  btnRegWithGoogle.textContent = 'Regístrate con Google';
  btnRegWithGithub.textContent = 'Regístrate con GitHub';
  regTrademark.textContent = 'KittyBook, 2023';

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
    titleReg,
    divContainer,
    // inputName,
    // inputUser,
    // inputConfirmPass,
    btnReturnH,
    regTrademark,
  );
  return sectionReg;
}
export default register;
