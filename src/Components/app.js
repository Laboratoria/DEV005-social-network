import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase.js';
// pantalla inicial
export function init(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
  <img src='./lib/img/fondoMovil.png' class= 'fondoBlanco'>
  <img src='./lib/img/logo.png' class= 'logo'>
  <form class="formInit">
      <button class='logIn'>Inicia Sesión</button>
      <button class='register'>Regístrate</button>
      <hr class='separator1'> 
      <span class='separatorText'>o</span>
      <hr class='separator2'>
      <button class='google'> 
      <img src='https://www.enriquedans.com/wp-content/uploads/2017/07/Google-G.jpg' class='imgGoogle'>
      Registrate con Google
      </button>
    </form>
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
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        navigateTo('/mainScreen');
      }).catch((error) => {
        GoogleAuthProvider.credentialFromError(error);
      });
  });
  section.append(logIn, register, google);
  return section;
}
// pantalla - error
function mistake(navigateTo) {
  const bug = document.createElement('div');
  bug.innerHTML = `<section class="errorSection"><img class="imgBug" src="../lib/img/error404.png">
  <h2 class="text"> Error 404: página no encontrada.</h2>
  <botton class="init"> <u>volver al Inicio</u> <botton>
  </section>`;

  const keep = bug.querySelector('.init');
  keep.addEventListener('click', () => {
    navigateTo('/mainScreen');
  });
  return bug;
}
function mainScreen() {
  const section = document.createElement('div');
  section.innerHTML = `<section>
  <h2>Welcome to Main Screen!</h2>
  </section>
  `;
  return section;
}
export {
  mistake,
  mainScreen,
};
