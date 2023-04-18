function login() {
  const root = document.getElementById('root');
  const section = document.createElement('section');
  section.classList.add('contenedor');
  const contendorLr = document.createElement('div');
  contendorLr.classList.add('contenedorLr');
  const divRight = document.createElement('div');
  divRight.classList.add('secctionDiv');
  divRight.id = ('divRight');
  const loginTitle = document.createElement('h2');
  const userName = document.createElement('span');
  const userPassword = document.createElement('span');
  const userAsk = document.createElement('span');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
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
  /* izquierda   */
  const divLeft = document.createElement('div');
  divLeft.classList.add('secctionDiv');
  divLeft.id = ('divLeft');
  const imgLogin = document.createElement('img');
  const nameSocialNetwrk = document.createElement('span');
  nameSocialNetwrk.classList.add('spanSocialNetwrk');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('containerDiv');

  root.append(section);
  section.append(contendorLr);
  contendorLr.append(divRight, divLeft);
  loginTitle.textContent = 'LOGIN';
  divRight.append(loginTitle);
  divRight.append(containerDiv);
  containerDiv.append(divUser);
  containerDiv.append(divPassword);
  containerDiv.append(divAsk);
  containerDiv.append(divRegister);
  containerDiv.append(divLogin);

  divRight.append(divUser);
  userName.textContent = 'USER NAME';
  divUser.append(userName);
  divUser.append(inputUser);

  divRight.append(divPassword);
  userPassword.textContent = 'PASSWORD';
  divPassword.append(userPassword);
  divPassword.append(inputPassword);

  divRight.append(divLogin);
  buttonLogin.textContent = 'LOGIN';
  divLogin.append(buttonLogin);

  divRight.append(divAsk);
  userAsk.textContent = 'YOU DONT HAVE USERNAME AND PASSWORD ';
  divAsk.append(userAsk);

  divRight.append(divRegister);
  buttonRegister.textContent = 'REGISTER';
  divRegister.append(buttonRegister);

  nameSocialNetwrk.textContent = 'SENIOR FACE';
  divLeft.append(nameSocialNetwrk);

  imgLogin.src = '../components/img/seniorFaceLogin.png';
  imgLogin.classList.add('imgLogin');
  imgLogin.alt = 'Es una imagen de una hija que muestra una aplicacion a su padre';
  divLeft.append(imgLogin);

  return section;
}

export default login;
