/* eslint-disable no-alert */
/* eslint-disable no-console */
import { accessWithGithub, logInWithEmail, accessWithGoogle } from '../lib/auth';

// Creación sección Iniciar sesión
function home(navigateTo) {
  const sectionHome = document.createElement('section');
  sectionHome.id = 'container-home';
  sectionHome.className = 'container';
  const titleKB = document.createElement('h1');
  titleKB.id = 'title-KB';
  titleKB.textContent = 'KittyBook';
  const footerH = document.createElement('footer');
  footerH.id = 'footer-home';
  footerH.className = 'footer';
  footerH.textContent = 'KittyBook, 2023';
  const sectionLogin = document.createElement('section');
  sectionLogin.id = 'cont-login';
  const email = document.createElement('input');
  email.type = 'email';
  email.id = 'user-email';
  email.placeholder = 'e-mail';
  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'user-pass';
  password.placeholder = 'Contraseña';

  // Creación botón Iniciar sesión
  const btnLogIn = document.createElement('button');
  btnLogIn.type = 'submit';
  btnLogIn.id = 'login';
  btnLogIn.textContent = 'Iniciar sesión';

  // Creación botón Inicio de sesión con Google
  const googleLogIn = document.createElement('button');
  googleLogIn.type = 'submit';
  googleLogIn.id = 'google-login';
  googleLogIn.className = 'provider';
  googleLogIn.textContent = 'Inicia sesión con Google';
  const iconGoogle = document.createElement('img');
  iconGoogle.id = 'icon-google';
  iconGoogle.src = './images/icon-google.png';
  iconGoogle.alt = 'icon-google';

  // Creación botón Iniciar sesión con GitHub
  const ghLogIn = document.createElement('button');
  ghLogIn.id = 'gh-login';
  ghLogIn.className = 'provider';
  const iconGH = document.createElement('img');
  iconGH.id = 'icon-gh';
  iconGH.src = './images/icon-github.png';
  iconGH.alt = 'icon-GitHub';
  ghLogIn.textContent = 'Inicia sesión con GitHub';

  // Creación sección Registrarme
  const regist = document.createElement('section');
  regist.id = 'to-regist';
  regist.textContent = '¿No tienes cuenta?';
  const btnRegister = document.createElement('button');
  btnRegister.id = 'h-register';
  btnRegister.textContent = 'Registrarme';

  // Texto de error al iniciar sesión
  const errorELogin = document.createElement('h3');
  errorELogin.id = 'error-login';
  errorELogin.classList.add('error-element');
  errorELogin.textContent = '';

  // Sección para tablets y dekstop
  const infoCont = document.createElement('section');
  infoCont.id = 'info-cont';
  const infoTxt = document.createElement('p');
  infoTxt.id = 'info-text';
  infoTxt.textContent = `¿Tienes un gatito? ¡En KittyBook puedes presumirlo!
  Publica ideas e imágenes para compartir información gatuna.`;

  btnLogIn.addEventListener('click', () => {
    const mail = email.value;
    const passwrd = password.value;

    logInWithEmail(mail, passwrd, errorELogin)
      .then(() => {
        navigateTo('/wall');
      })
      .catch((error) => {
        console.log(error);
      });
  });

  googleLogIn.addEventListener('click', () => {
    accessWithGoogle(navigateTo);
  });

  ghLogIn.addEventListener('click', () => {
    accessWithGithub(navigateTo);
  });

  btnRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  sectionHome.append(
    titleKB,
    infoCont,
    sectionLogin,
    regist,
    footerH,
  );
  sectionLogin.append(
    email,
    password,
    btnLogIn,
    googleLogIn,
    ghLogIn,
    errorELogin,
  );

  infoCont.append(infoTxt);
  googleLogIn.append(iconGoogle);
  ghLogIn.append(iconGH);
  regist.append(btnRegister);
  return sectionHome;
}

export default home;
