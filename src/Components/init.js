import { loginWithGoogle } from '../lib/auth';

// pantalla inicial
export function init(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('init');
  section.innerHTML = `
    <img src='./lib/img/logo.png' class= 'logo'>
    <button class='logIn'>Inicia Sesión</button>
    <button class='register'>Regístrate</button>
    <img src='./lib/img/division.png' class= 'division'>
    <button class='google'>Regístrate con Google</button>
  `;
  const logIn = section.querySelector('.logIn');
  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  const register = section.querySelector('.register');
  register.addEventListener('click', () => {
    navigateTo('/register');
  });

  const google = section.querySelector('.google');
  google.addEventListener('click', () => {
    loginWithGoogle()
      .then(() => {
        navigateTo('/emprende');
      }).catch(() => {
      });
  });
  return section;
}
