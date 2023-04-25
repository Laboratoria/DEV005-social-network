import { loginPatitas, loginWithGoogle, loginWithTwitter } from '../lib/auth';

function home(/* navigateTo */) {
  const section = document.createElement('section');
  // Elementos
  const img = document.createElement('img');
  const form = document.createElement('form');
  form.className = 'form1';
  const title = document.createElement('h1');
  const mailUser = document.createElement('label');
  const mail = document.createElement('input');
  mail.id = 'mail';
  const password = document.createElement('input');
  password.id = 'password';
  password.maxLength = 10;
  password.type = 'password';
  const passUser = document.createElement('label');
  const division = document.createElement('div');
  const register = document.createElement('button');
  const forgetPass = document.createElement('button');
  const loginGoogle = document.createElement('button');
  const loginMicrosoft = document.createElement('button');
  const loginTwitter = document.createElement('button');
  const login = document.createElement('button');

  img.setAttribute('src', '../img/logo.jpg');
  img.setAttribute('alt', 'logo de Patitas.com');
  img.setAttribute('class', 'logo');
  register.textContent = 'Registrarse';
  register.setAttribute('class', 'register-b');
  forgetPass.textContent = 'Olvidé contraseña';
  forgetPass.setAttribute('class', 'forgetPass-b');
  division.setAttribute('class', 'divhome');

  loginGoogle.setAttribute('id', 'loginGoogle-b');
  loginGoogle.textContent = 'Inicia sesión con Google';
  loginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithGoogle();
    console.log('si sirvo');
  });

  loginMicrosoft.setAttribute('id', 'loginMicrosoft');
  loginMicrosoft.setAttribute('class', 'loginMicrosoft-b');
  loginMicrosoft.textContent = 'Inicia sesión con Microsoft';

  loginTwitter.setAttribute('id', 'loginTwitter');
  loginTwitter.setAttribute('class', 'btn twitter');
  loginTwitter.textContent = 'Inicia sesión con Twitter';
  loginTwitter.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithTwitter();
    console.log('si sirvo');
  });

  const socialBtns = document.createElement('div');
  socialBtns.setAttribute('class', 'social-btns');
  socialBtns.appendChild(loginTwitter);

  login.setAttribute('id', 'login-b');
  login.textContent = 'INICIAR SESIÓN';
  login.addEventListener('click', (e) => {
    e.preventDefault();
    loginPatitas();
    console.log('si sirvo');
  });

  mailUser.textContent = 'Correo electrónico:';
  passUser.textContent = 'Contraseña:';

  title.textContent = 'Patitas.com';

  section.append(img, form);
  form.append(
    title,
    mailUser,
    mail,
    passUser,
    password,
    division,
    loginGoogle,
    loginMicrosoft,
    socialBtns,
    login,
  );
  division.append(register, forgetPass);
  return section;
}

export default home;
