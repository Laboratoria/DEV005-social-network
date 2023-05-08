import { loginWithGoogle } from '../lib/auth';

// pantalla inicial
export function init(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('init');
  section.innerHTML = `
    <img src='https://firebasestorage.googleapis.com/v0/b/social-network-dev-005.appspot.com/o/assets%2FLogo.png?alt=media&token=feddabaf-9c84-4263-a12f-7244c595f987' class= 'logo'>
    <button class='logIn'>Inicia Sesión</button>
    <button class='register'>Regístrate</button>
    <img src='https://firebasestorage.googleapis.com/v0/b/social-network-dev-005.appspot.com/o/assets%2Fdivision.png?alt=media&token=f593313b-0b59-4d75-8ec1-5a2f43015e48' class= 'division'>
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
