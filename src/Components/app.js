import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// pantalla inicial

export function init(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `<form class= 'form'>
  <button class= 'logIn'> Inicia Sesión </button>
  <button class= 'register'> Regístrate </button>
  <hr class= 'separator1'> 
  <span class= 'separatorText'> o </span>
  <hr class= 'separator2'>
  <button class= 'google'> 
  <img src= 'https://www.enriquedans.com/wp-content/uploads/2017/07/Google-G.jpg' class= 'imgGoogle'>
  Registrate con Google </button>
  </form>`;

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
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    navigateTo('/mainScreen');
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}); 

  section.append(logIn, register, google);

  return section;
};

function login() {
  const section = document.createElement('section');
  const interaction = document.createElement('form');
  interaction.className = 'interaction';
  const initSection = document.createElement('h2');
  initSection.className = 'initSection';
  const textButton = document.createElement('label');
  textButton.className = 'textButton';
  const card1 = document.createElement('input');
  card1.className = 'card1';
  const textPassword = document.createElement('label');
  textPassword.className = 'textPassword';
  const card2 = document.createElement('input');
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

export function mainScreen () {
  const section = document.createElement('section');
  section.innerHTML = `<h1>Welcome to Main Screen!</h1>`;
  return section;
}

export {
  login,
  mistake,
  create,
};
