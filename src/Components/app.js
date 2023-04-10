import { createUserWithEmailAndPassword } from 'firebase/auth';
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
const login = () => {
  const sectionLogin = document.createElement('div');
  sectionLogin.innerHTML = `<section class="cardLogin"> 
  <h2 class="initSection">Inicio de Sesión</h2>
  <form class="formInteraction">
  <label class="labelEmail">Correo Electronico</label>
  <input class="inputEmail" id="inputEmail" placeholder="ejemplo@gmail.com"></input>
  <label class="labelPassword">Contraseña</label>
  <input class="inputPassword" id="inputPassword" type="password" placeholder="********"></input>
  <button class="getInt">Ingresar</button>
  </form>
  <botton class="bottomText">¿No tienes una cuenta? Regístrate</botton>
  </section >
  `;
  return sectionLogin;
};

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
