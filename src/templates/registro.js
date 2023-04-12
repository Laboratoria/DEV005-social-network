import { registroUsuario } from '../lib/auth.js';

export function registro(navegacion) {
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
        <div id="mensaje-bienvenida" name="mensaje-bienvenida" class="mensaje-bienvenida"> </div>
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
  const txtNombreUsuario = section.querySelector('#nombreUsuario');
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
    const nombre = txtNombreUsuario.value;

    registroUsuario(correo, clave);

  });

  return section;
}
