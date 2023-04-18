import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

// pantalla - crear una cuenta nueva
/* <label class="textConfirmPassword">Confirmar contraseña </label>
<input class="card3" id="card3" type="password" placeholder='********'></input> */
export function create(navigateTo) {
  const sectionCreate = document.createElement('div');
  sectionCreate.classList.add('creat');
  sectionCreate.innerHTML = `
    <img src='./lib/img/logo.png' class="logo1">
    <form class = "formCreateAccount">
    <h2 class = "createAccount">Crear cuenta</h2>
    <label class="textButtonCreateAccount">Correo Electronico</label>
    <input class="card1" id="card1" placeholder='ejemplo@gmail.com'></input>
    <span class="alerta"></span>
    <label class="textPasswordCreateAccount">Contraseña nueva</label>
    <input class="card2" id="card2" type="password" placeholder='********'></input>
    <button class="bottomKeep" id="btnguardar">Guardar</button>
    </form>
    <button class="bottomText">¿Ya tienes cuenta? Iniciar Sesión</button>
    </section>
    `;
  const logIn = sectionCreate.querySelector('.bottomText');
  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  const form = sectionCreate.querySelector('.formCreateAccount');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = sectionCreate.querySelector('.card1').value;
    const password = sectionCreate.querySelector('.card2').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('ya entro');
      })
      .catch(() => {
        sectionCreate.querySelector('.alerta').innerHTML = '<h3 class="alert">Esta cuenta ya esta registrada, intenta con otra.</h3>';
      });
  });
  return sectionCreate;
}
