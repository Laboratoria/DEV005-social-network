import { loginEmail, loginGoogle } from '../lib/auth.js';
import { dinamicLabels } from '../lib/labels.js';

export const loginFirebase = (email, password, errorEmail, errorPassword) => {
  const loginPrevent = (e) => {
    e.preventDefault();
    loginEmail(email.value, password.value, errorEmail, errorPassword);
  };
  return loginPrevent;
};

export const googleFirebase = () => {
  loginGoogle();
};

export function login(navigation) {
  const section = document.createElement('section');

  const html = `
  <div class='contenedor'>
    <div class="contenedorLogo">
      <img class="imgLogo" src="img/logo.png" alt="logo">
    </div>
    <main>
      <div class="contenedorIngreso">
        <form class="contenedorInput">
        <span id="errorUsuario" class="errorUsuario"></span>
          <label>
            <span>Correo electrónico</span>
            <input type="email" autocomplete="off" name="email" class="email" id="email">
          </label>
          <span id="errorEmail" class="errorEmail"></span>
          <label>
            <span>Contraseña</span>
            <input type="password" class="password" id="password">
          </label>  
          <span id="errorPassword" class="errorPassword"></span>
        </form>   
        <button class="btnLogin" id="btnLogin">Iniciar sesión</button>
        <button class="btnGoogle" id="btnGoogle"> <img class="logoGoogle" src="./img/logogoogle.png" alt="Logo Google"></img>Continuar con Google</button>
        <span class="textRegistro">Si no tienes cuenta  -> <a class="linkRegister" id="linkRegister">Regístrate</a></span>
      </div>
    </main>
  </div>`;
  section.innerHTML = html;

  const email = section.querySelector('#email');
  const password = section.querySelector('#password');
  const errorEmail = section.querySelector('#errorEmail');
  const errorPassword = section.querySelector('#errorPassword');

  // Limpia los inputs luego de los errores
  email.addEventListener('click', () => {
    email.value = '';
    errorEmail.innerHTML = '';
    email.innerHTML = '';
  });

  password.addEventListener('click', () => {
    password.value = '';
    errorPassword.innerHTML = '';
    password.innerHTML = '';
  });

  // Labels dinámicos
  dinamicLabels(section);

  // Evento del botón Registrar
  const btnRegistrar = section.querySelector('#linkRegister');

  btnRegistrar.addEventListener('click', () => {
    navigation('/register');
  });

  // Evento del botón Iniciar Sesiòn

  const btnLogin = section.querySelector('#btnLogin');

  btnLogin.addEventListener('click', loginFirebase(email, password, errorEmail, errorPassword));

  // Google inicio

  const btnGoogle = section.querySelector('#btnGoogle');

  btnGoogle.addEventListener('click', googleFirebase);
  return section;
}
