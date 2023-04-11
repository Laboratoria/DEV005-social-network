function home(/* navigateTo */) {
  const section = document.createElement('section');
  // Elementos
  const img = document.createElement('img');
  const form = document.createElement('form');
  const title = document.createElement('h1');
  const mailUser = document.createElement('label');
  const mail = document.createElement('input');
  const passUser = document.createElement('label');
  const password = document.createElement('input');
  const division = document.createElement('div');
  const register = document.createElement('button');
  const forgetPass = document.createElement('button');
  const loginGoogle = document.createElement('button');
  const login = document.createElement('button');

  img.setAttribute('src', '../img/logo.jpg');
  img.setAttribute('alt', 'logo de Patitas.com');
  img.setAttribute('class', 'logo');
  register.textContent = 'Registrarse';
  register.setAttribute('class', 'register-b');
  forgetPass.textContent = 'Olvidé contraseña';
  forgetPass.setAttribute('class', 'forgetPass-b');
  division.append(register, forgetPass);
  division.setAttribute('class', 'divhome');
  loginGoogle.setAttribute('id', 'loginGoogle-b');
  loginGoogle.textContent = 'Inicia sesión con Google';
  login.setAttribute('id', 'login-b');
  login.textContent = 'INICIAR SESIÓN';
  mailUser.textContent = 'Correo electrónico:';
  passUser.textContent = 'Contraseña:';
  title.textContent = 'Patitas.com';

  form.append(title, mailUser, mail, passUser, password, division, loginGoogle, login);
  section.append(img, form);
  return section;
}

export default home;
