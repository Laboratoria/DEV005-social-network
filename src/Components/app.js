import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';
import { auth } from './firebase.js';

// pantalla inicial
function init(navigateTo) {
  const section = document.createElement('section');
  const logIn = document.createElement('button');
  logIn.className = 'logIn';
  const register = document.createElement('button');
  register.className = 'register';
  const google = document.createElement('button');
  google.className = 'google';
  const gitHub = document.createElement('button');
  gitHub.className = 'gitHub';

  logIn.textContent = 'Inicia Sesión';
  register.textContent = 'Registrate';
  google.textContent = 'Registrate con Google';
  gitHub.textContent = 'Registrate con GitHub';

  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  section.append(logIn, register, google, gitHub);
  return section;
}
// pantalla - inicio de sesión
function login() {
  const section = document.createElement('section');
  const interaction = document.createElement('form');
  interaction.className = 'interaction';
  const initSection = document.createElement('h2');
  initSection.className = 'initSection';
  const textButton = document.createElement('label');
  textButton.className = 'textButton';
  const card1 = document.createElement('input').value;
  card1.className = 'card1';
  const textPassword = document.createElement('label');
  textPassword.className = 'textPassword';
  const card2 = document.createElement('input').value;
  card2.className = 'card2';
  const getInt = document.createElement('button');
  getInt.className = 'getInt';
  const bottomText = document.createElement('button');
  bottomText.className = 'bottomText';

  initSection.textContent = 'Inicio de Sesión';
  textButton.textContent = 'Correo Electronico';
  textButton.appendChild(card1);
  card1.placeholder = 'ejemplo@gmail.com';
  textPassword.textContent = 'Contraseña';
  textPassword.appendChild(card2);
  card2.placeholder = '********';
  getInt.textContent = 'Ingresar';
  bottomText.textContent = '¿No tienes una cuenta? Regístrate';

  interaction.append(textButton, card1, textPassword, card2, getInt);
  section.append(initSection, interaction, bottomText);
  return section;
}
// pantalla - error
function mistake() {
  const title = document.createElement('h2');

  title.textContent = 'Error 404: página no encontrada.';
  return title;
}

// pantalla - crear cuenta
function create() {
  const section = document.createElement('section');
  const formCreateAccount = document.createElement('form');
  formCreateAccount.className = 'formCreateAccount';
  const createAccount = document.createElement('h2');
  createAccount.className = 'createAccount';
  const textButton = document.createElement('label');
  textButton.className = 'textButtonCreateAccount';
  const card1 = document.createElement('input');
  card1.className = 'card1';
  const textPassword = document.createElement('label');
  textPassword.className = 'textPasswordCreateAccount';
  const card2 = document.createElement('input');
  card2.className = 'card2';
  const bottomKeep = document.createElement('button');
  bottomKeep.className = 'bottomKeep';
  const consider = document.createElement('button');
  consider.className = 'consider';

  createAccount.textContent = 'Crear Cuenta';
  textButton.textContent = 'Correo Electronico';
  textButton.appendChild(card1);
  card1.placeholder = 'ejemplo@gmail.com';
  textPassword.textContent = 'Contraseña';
  textPassword.appendChild(card2);
  card2.placeholder = '********';
  bottomKeep.textContent = 'Guardar';
  consider.textContent = '¿Ya tienes cuenta? Iniciar Sesión';

  formCreateAccount.append(textButton, card1, textPassword, card2, bottomKeep);
  section.append(createAccount, formCreateAccount, consider);

  formCreateAccount.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = formCreateAccount.card1.value;
    const contraseña = formCreateAccount.card2.value;
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, contraseña);
      console.log(userCredentials);
    } catch (error) {
      console.log(error);
    }
  });

  return section;
}
export {
  init,
  login,
  mistake,
  create,
};
