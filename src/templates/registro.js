// eslint-disable-next-line no-unused-vars
// import labels from "./labels.js";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/index.js';

export function registro() {
  const section = document.createElement('section');
  const htmlRegistro = `
  <div class='contenedor'>
    <div class="contenedorLogo">
      <img class="imgLogo" src="img/logo.png" alt="logo">
    </div>
    <main>
    <div class="contenedorIngresoRegistro">
      <span class="registroTitulo">Registro</span>
      <form class="contenedorInput">
        
        <label>
        <span>Nombre completo</span>
        <input type="text" name="nombreUsuario" class="nombreUsuario" id="nombreUsuario">
        </label>
        <label>
            <span>Nombre de tu Mascota</span>
            <input type="text" name="nombreMascota" class="nombreMascota" id="nombreMascota">
          </label>
        <label>
          <span>Correo electrónico</span>
          <input type="email" autocomplete="off" name="correo" class="correo" id="correoReg">
        </label>
          <span id="errorCorreo" class="errorCorreo"></span>
        <label>
          <span>Contraseña</span>
          <input type="password" class="clave" id="claveReg">
        </label>  
          <span id="errorClave" class="errorClave"></span>
        
      </form>   
        <button class="btnCrearCuenta" id="btnCrearCuenta">Registrar</button>
        <span class="textRegistro">Si ya tienes cuenta -> <button class="btnRegistro" id="btnCrearCuenta">Inicia sesión</button></span>
        
    </div>
    </main>
  </div>`;

  section.innerHTML = htmlRegistro;

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

  // Configuración de autenticación firebase
  const txtCorreo = section.querySelector('#correoReg');
  const txtClave = section.querySelector('#claveReg');
  const errorCorreo = section.querySelector('#errorCorreo');
  const errorClave = section.querySelector('#errorClave');

  const btnCrearCuenta = section.querySelector('#btnCrearCuenta');

  const btncuenta = section.querySelector('#btnCrearCuenta');

  btncuenta.addEventListener('click', () => ('done'));

  txtCorreo.addEventListener('click', async () => {
    txtCorreo.value = '';
    errorCorreo.innerHTML = '';
    txtCorreo.innerHTML = '';
  });

  txtClave.addEventListener('click', async () => {
    txtClave.value = '';
    errorClave.innerHTML = '';
    txtClave.innerHTML = '';
  });

  btnCrearCuenta.addEventListener('click', async () => {
    const correo = txtCorreo.value;
    const clave = txtClave.value;

    try {
      const usuario = await createUserWithEmailAndPassword(auth, correo, clave);
      errorClave.innerHTML = 'Registro exitoso';
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        errorCorreo.innerHTML = 'Usuario ya registrado';
      } else if (error.code === 'auth/invalid-email') {
        errorCorreo.innerHTML = 'Correo invalido';
      } else if (error.code === 'auth/weak-password') {
        errorClave.innerHTML = 'Contraseña demasiado debil';
      } else if (error.code === 'auth/missing-password') {
        errorClave.innerHTML = 'Contraseña requerida';
      } else if (error.code) {
        errorClave.innerHTML = 'Algo salió mal';
      }
    }
  });

  return section;
}
