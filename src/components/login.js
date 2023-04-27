import { validateUserAndPasswordFireBase } from '../lib/index';

function login(navigateTo) {
  const containerLogin = document.createElement('section');
  containerLogin.classList.add('containerLogin');

  /* Seccion izquierdo  */
  const divLeft = document.createElement('div');
  divLeft.classList.add('divLeft');
  divLeft.id = ('divLeft');

  // imagen de fondo del lado izquierdo
  const imgLogin = document.createElement('img');
  imgLogin.src = './img/img3.png';
  imgLogin.alt = 'Es una hija que muestra una aplicacion a su padre en un movil';
  imgLogin.classList.add('imgLogin');
  // divLeft.append(imgLogin);

  // nombre escrito en letras
  const divSocialNetword = document.createElement('div');
  divSocialNetword.classList.add('divSocialNetword');
  const spanSocialNetword = document.createElement('span');
  spanSocialNetword.textContent = 'Senior Face';
  divSocialNetword.append(spanSocialNetword);
  // divLeft.append(divSocialNetword);

  divLeft.append(imgLogin, divSocialNetword);

  // creacion del contenedor derecho
  const divRight = document.createElement('div');
  divRight.classList.add('divRight');

  // titulo de iniciar secion
  const h2Login = document.createElement('h2');
  h2Login.classList.add('h2Login');
  h2Login.textContent = 'INICIAR SESION';

  // Creación de formulario en el contenedor derecho
  const formLogin = document.createElement('form');
  formLogin.classList.add('formLogin');
  divRight.append(formLogin);

  // Input para insertar correo
  const listInputCorreo = document.createElement('li');
  listInputCorreo.classList.add('listInput');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'INSERTAR CORREO ELECTRÓNICO';
  const inputInsertCorreo = document.createElement('input');
  inputInsertCorreo.name = 'correo';
  inputInsertCorreo.placeholder = 'another@example.com';
  const errorMessageEmail = document.createElement('small');
  errorMessageEmail.textContent = '';
  listInputCorreo.append(labelCorreo, inputInsertCorreo, errorMessageEmail);

  // Input para insertar Password

  const listInputPassword = document.createElement('li');
  listInputPassword.classList.add('listInput');
  const labelPassword = document.createElement('label');
  labelPassword.textContent = 'INSERTAR CONTRASEÑA';
  const inputInsertPassword = document.createElement('input');
  inputInsertPassword.name = 'password';
  inputInsertPassword.placeholder = 'mínimo 6 dígitos';
  const errorMessagePassword = document.createElement('small');
  errorMessagePassword.textContent = '';
  listInputPassword.append(labelPassword, inputInsertPassword, errorMessagePassword);

  // Boton de "iniciar secion"
  const listButtonLogin = document.createElement('li');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLogin');
  buttonLogin.textContent = 'INICIAR SESION';
  buttonLogin.type = 'submit';
  listButtonLogin.append(buttonLogin);

  // pregunta

  const listAsk = document.createElement('li');
  const smallAsk = document.createElement('small');
  smallAsk.classList.add('smallAsk');
  smallAsk.textContent = '¿No tienes una cuenta registrada?';
  listAsk.append(smallAsk);

  // Boton de "Registrar con Google"
  const listButtonRegisterGoogle = document.createElement('li');
  listButtonRegisterGoogle.classList.add('listButtonRegisterGoogle');
  const buttonRegisterGoogle = document.createElement('button');
  buttonRegisterGoogle.classList.add('buttonRegisterGoogle');
  buttonRegisterGoogle.textContent = 'Inicia con Google';
  listButtonRegisterGoogle.append(buttonRegisterGoogle);
  const logoGoogle = document.createElement('img');
  logoGoogle.src = './img/logoGoogle.png';
  buttonRegisterGoogle.append(logoGoogle);

  // Input de linea separadora
  const containerLineDivide = document.createElement('div');
  containerLineDivide.classList.add('containerLineDivide');
  const lineDivide = document.createElement('div');
  lineDivide.classList.add('lineDivide');
  const circle = document.createElement('div');
  circle.classList.add('circle');
  lineDivide.append(circle);
  containerLineDivide.append(lineDivide);

  // Insertar listas en formulario "formLogin"

  formLogin.append(
    listInputCorreo,
    listInputPassword,
    listButtonLogin,
    containerLineDivide,
    listButtonRegisterGoogle,
  );

  // icono de la parte superior
  const divLogo = document.createElement('div');
  divLogo.classList.add('divLogo');
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/iconoLogin.png';
  divLogo.append(imgLogo);

  divRight.append(h2Login, divLogo, formLogin);

  containerLogin.append(divLeft, divRight);

  // Funciones de firebase
  buttonLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = inputInsertCorreo.value;
    const password = inputInsertPassword.value;
    validateUserAndPasswordFireBase(navigateTo, user, password);
    console.log('selogro');
  });
  buttonLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    navigateTo('/register');
  });

  /* buttonRegisterGoogle.addEventListener('click', () => {
    singGogle(providerGoogle)
      .then(() => {
      // Signed in
        navigateTo('/seniorFace');
      })
      .catch((error) => {
        console.log(error);
      });
  });
*/
  /* const maskPassword = (input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/./g, '*');
    });
  };

  const passwordMask = maskPassword(inputInsertPassword);
  console.log(passwordMask);*/
  return containerLogin;
}
export default login;
