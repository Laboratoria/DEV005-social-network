const section = document.createElement('section');
// Elementos
const img = document.createElement('img');
const form = document.createElement('form');
  form.class = 'form1';
const title = document.createElement('h1');
const mailUser = document.createElement('label');
const mail = document.createElement('input');
const passUser = document.createElement('label');
const password = document.createElement('input');
const division = document.createElement('div');
const register = document.createElement('button');
const forgetPass = document.createElement('button');
const loginGoogle = document.createElement('button');
const loginMicrosoft = document.createElement('button');
const login = document.createElement('button');

function home(navigateTo) {

  title.textContent = 'Patitas.com';
  img.setAttribute('src', '../img/logo.jpg');
  img.setAttribute('alt', 'logo de Patitas.com');
  img.setAttribute('class', 'logo');

  register.textContent = 'Registrarse';
  register.setAttribute('class', 'register-b');

  forgetPass.textContent = 'Olvidé contraseña';
  forgetPass.setAttribute('class', 'forgetPass-b');

  division.setAttribute('class', 'divhome');

  loginGoogle.setAttribute('id', 'loginGoogle');
  loginGoogle.setAttribute('class', 'loginGoogle-b');
  loginGoogle.textContent = 'Inicia sesión con Google';

  loginMicrosoft.setAttribute('id', 'loginMicrosoft');
  loginMicrosoft.setAttribute('class', 'loginMicrosoft-b');
  loginMicrosoft.textContent = 'Inicia sesión con Microsoft';

  login.setAttribute('id', 'login');
  login.setAttribute('class', 'login-b');
  login.textContent = 'INICIAR SESIÓN';

  mailUser.textContent = 'Correo electrónico:';
  passUser.textContent = 'Contraseña:';

  section.append(img, form);
  form.append(title, mailUser, mail, passUser, password, division, loginGoogle, loginMicrosoft, login);
  division.append(register, forgetPass);
  return section;
}

export default home;
