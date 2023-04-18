import { accessWithGithub, newAccount } from '../lib/auth';

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
  const btnLogIn = document.createElement('button');
  btnLogIn.type = 'submit';
  btnLogIn.id = 'login';
  btnLogIn.textContent = 'Iniciar sesión';
  const iconGoogle = document.createElement('img');
  iconGoogle.id = 'icon-google';
  iconGoogle.src = '/images/icon-google.png';
  iconGoogle.alt = 'icon-google';
  const googleLogIn = document.createElement('button');
  googleLogIn.type = 'submit';
  googleLogIn.id = 'google-login';
  googleLogIn.className = 'provider';
  googleLogIn.textContent = 'Inicia sesión con Google';
  const ghLogIn = document.createElement('button');
  ghLogIn.id = 'gh-login';
  ghLogIn.className = 'provider';
  const iconGH = document.createElement('img');
  iconGH.id = 'icon-gh';
  iconGH.src = '/images/icon-github.png';
  iconGH.alt = 'icon-GitHub';
  ghLogIn.textContent = 'Inicia sesión con GitHub';
  const regist = document.createElement('section');
  regist.id = 'to-regist';
  regist.textContent = '¿No tienes cuenta?';
  const btnRegister = document.createElement('button');
  btnRegister.id = 'h-register';
  btnRegister.textContent = 'Registrarme';
  // Sección para tablets y dekstop
  const info = document.createElement('section');
  info.id = 'info-text';
  info.textContent = `¿Tienes un gatito? ¡En KittyBook puedes presumirlo!
  Publica ideas e imágenes para compartir información gatuna.`;

  // btnLogIn.addEventListener('click', () => {
  //   const mail = email.value;
  //   const passwrd = password.value;
  //   if (mail === '' || passwrd === '') {
  //     alert('Ingrese usuario y/o contraseña');
  //   } else {
  //     newAccount(mail, passwrd).then(() => {
  //       alert('Sesión iniciada');
  //       navigateTo('/wall');
  //     }).catch((error) => {
  //       alert('Error al iniciar sesión');
  //       console.log(error);
  //     });
  //   }
  // });

  btnLogIn.addEventListener('click', () => {
    // const email = inputEmail.value;
    // const password = inputPass.value;
    // userCredential = (email, password);
    navigateTo('/wall');
  });


  ghLogIn.addEventListener('click', () => {
    accessWithGithub(navigateTo);
  });

  btnRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  sectionHome.append(
    titleKB,
    info,
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
  );
  googleLogIn.append(iconGoogle);
  ghLogIn.append(iconGH);
  regist.append(btnRegister);
  return sectionHome;
}

export default home;
