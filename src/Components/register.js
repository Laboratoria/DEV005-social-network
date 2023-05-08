import { createUser } from '../lib/auth';

export function create(navigateTo) {
  const sectionCreate = document.createElement('div');
  sectionCreate.classList.add('creat');
  sectionCreate.innerHTML = `
    <img src='https://firebasestorage.googleapis.com/v0/b/social-network-dev-005.appspot.com/o/assets%2FLogo.png?alt=media&token=feddabaf-9c84-4263-a12f-7244c595f987' class="logo1">
    <form class = "formCreateAccount">
    <h2 class = "createAccount">Crear cuenta</h2>
    <label class="textButtonCreateAccount">Correo Electronico</label>
    <input class="card1" id="card1" placeholder='ejemplo@gmail.com'></input>
    <label class="textPasswordCreateAccount">Contraseña nueva</label>
    <input class="card2" id="card2" type="password" placeholder='********'></input>
    <span class="alerta"></span>
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
    createUser(email, password)
      .then(() => {
        navigateTo('/emprende');
      })
      .catch((err) => {
        sectionCreate.querySelector('.alerta').innerHTML = `${err.message}`;
      });
  });
  return sectionCreate;
}
