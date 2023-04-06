// eslint-disable-next-line no-unused-vars
// import labels from "./labels.js";
import { registro } from './registro.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/index.js';

export function bienvenida(navegacion) {
  const section = document.createElement('section');
  const htmlBienvenida = `
  <section>
  <div class="contenedorLogo">
    <img class="imgLogo" src="img/logo.png" alt="logo">
  </div>
  </section>
  <main>
  <div class="contenedorIngreso">
  <span class="registroTitulo">$document.getElementById("nombreUsuario").innerHTML = "Bienvenida " + nombreUsuario + " a Mascoteando"</span>
    <form class="contenedorInput">
      <label>
        <span>Correo electrónico</span>
        <input type="email" autocomplete="off" name="correo" class="correo" id="correo">
      </label>
      <label>
        <span>Contraseña</span>
        <input type="password" class="clave" id="clave">
      </label>  
      
    </form>   
      <button class="btnInicio" id="btnInicio">Iniciar sesión</button>
     
  </div>
  </main>`;

  section.innerHTML = htmlBienvenida;

  // Labels dinámicos

  const inputs = section.querySelectorAll('input');

  inputs.forEach((input) => {
    input.onfocus = () => {
      input.previousElementSibling.classList.add('top');
      input.previousElementSibling.classList.add('focus');
      input.parentNode.classList.add('focus');
    };
    input.onblur = () => {
      input.value = input.value.trim();
      // eslint-disable-next-line eqeqeq
      if (input.value.trim().length == 0) {
        input.previousElementSibling.classList.remove('top');
      }

      input.previousElementSibling.classList.remove('focus');
      input.parentNode.classList.remove('focus');
    };
  });

  return section;
}
