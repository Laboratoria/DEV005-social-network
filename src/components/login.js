function login(navigateTo) {
  const root = document.getElementById('root');
  const section = document.createElement('section');
  section.classList.add('contenedor');
  const contendorLr = document.createElement('div');
  contendorLr.classList.add('contenedorLr');

  /* izquierda   */
  const divLeft = document.createElement('div');
  divLeft.classList.add('divLeft');
  divLeft.id = ('divLeft');
  const imgLogin = document.createElement('img');
  const divSocialNetword = document.createElement('div');
  divSocialNetword.classList.add('divSocialNetword');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('containerDiv');
  /* derecha   */

  const divRight = document.createElement('div');
  divRight.classList.add('divRaight');
  const loginTitle = document.createElement('h2');
  loginTitle.classList.add('loginTitle');
  const userName = document.createElement('span');
  const userPassword = document.createElement('span');
  const userAsk = document.createElement('span');
  userAsk.classList.add('askP');
  const inputUser = document.createElement('input');
  inputUser.classList.add('inputClassLogin');
  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputClassLogin');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonClassLogin');
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonClassLogin');
  const divUser = document.createElement('div');
  divUser.classList.add('loginDiv');
  const divPassword = document.createElement('div');
  divPassword.classList.add('loginDiv');
  const divRegister = document.createElement('div');
  divRegister.classList.add('loginDiv');
  const divLogin = document.createElement('div');
  divLogin.classList.add('loginDiv');
  const divAsk = document.createElement('div');
  divAsk.classList.add('loginDiv');

  root.append(section);
  section.append(contendorLr);

  contendorLr.append(divLeft, divRight);
  loginTitle.textContent = 'LOGIN';
  divRight.append(loginTitle, containerDiv);
  containerDiv.append(divUser, divPassword, divLogin, divAsk, divRegister);

  userName.textContent = 'USER NAME';
  divUser.append(userName, inputUser);

  userPassword.textContent = 'PASSWORD';
  divPassword.append(userPassword, inputPassword);

  buttonLogin.textContent = 'LOGIN';
  divLogin.append(buttonLogin);

  userAsk.textContent = 'YOU DONT HAVE USERNAME AND PASSWORD ';
  divAsk.append(userAsk);

  buttonRegister.textContent = 'REGISTER';
  divRegister.append(buttonRegister);

  divSocialNetword.textContent = 'SENIOR FACE';
  divLeft.append(divSocialNetword);

  imgLogin.src = '../components/img/seniorFaceLogin.png';
  imgLogin.classList.add('imgLogin');
  imgLogin.alt = 'Es una hija que muestra una aplicacion a su padre en un movil';
  divLeft.append(imgLogin);

  // creacion de eventos
  buttonRegister.addEventListener('click', () => { navigateTo('/register'); });

  return section;
}

export default login;
