// eslint-disable-next-line no-unused-vars
// import labels from "./labels.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/index.js";

export function registro () {
  const section = document.createElement('section');
  const htmlRegistro = `<section>
  <div class="contenedorLogo">
    <img class="imgLogo" src="img/logo.png" alt="logo">
  </div>
  </section>
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
      <label>
        <span>Contraseña</span>
        <input type="password" class="clave" id="claveReg">
      </label>  
      
    </form>   
      <button class="btnCrearCuenta" id="btnCrearCuenta">Registrar</button>
      <span class="textRegistro">Si ya tienes cuenta -> <button class="btnRegistro" id="btnCrearCuenta">Inicia sesión</button></span>
      
  </div>
  </main>`

  section.innerHTML = htmlRegistro;

  //Labels dinámicos

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

  //Configuración de autenticación firebase
  const txtCorreo = section.querySelector('#correoReg');
  const txtClave = section.querySelector('#claveReg');

  const btnCrearCuenta = section.querySelector('#btnCrearCuenta');

  const btncuenta = section.querySelector("#btnCrearCuenta")

  btncuenta.addEventListener("click", () => console.log("done"))

  btnCrearCuenta.addEventListener('click',async () => {
    const correo = txtCorreo.value;
    const clave = txtClave.value;

    console.log(correo,clave);

    try {
      const usuario = await createUserWithEmailAndPassword(auth, correo, clave);
      console.log(usuario);
    } catch (error) {
      console.log(error);
    }

  });

  return section;
};


