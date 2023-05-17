// Elementos importados
import {
  googleLogin, loginWithUserEmail,
} from '../lib/auth';
import { validarRutaLogin } from '../utilitaries/ruteo';
import { loginTemplate } from '../template/login-template.js';

// funcionalidad
function login(navigateTo) {
  const sectionLogin = document.createElement('section');
  sectionLogin.className = 'section-reguistro';
  sectionLogin.innerHTML = '';
  sectionLogin.innerHTML = loginTemplate;
  // funcionalidad del boton gogle
  const gogleBtn = sectionLogin.querySelector('#loginGogleBtn');
  gogleBtn.addEventListener('click', async () => {
    try {
      // Invoca función googleLogin del archivo lib/auth.js y recibe datos retornados
      const accessData = await googleLogin();
      if (accessData.loginOk) {
        navigateTo('/'); // Si el ingreso del usuario es correcto lo redirige al Home.
      } else {
        switch (accessData.data.code) {
          case 'auth/popup-closed-by-user':
            console.log('Lo sentimos, la ventana de ingreso fue cerrada.');
            break;
          default:
            console.log('Hubo un problema con tu inicio de sesión. Contacta al administrador de la App');
        }
      }
    } catch (error) {
      // Si algo falla en el proceso de login con Google muestra este log por consola y muestra
      // un error en el label id="statusLogin"
      console.warn('Login.js - loginGoogleBtn - click - Error: ', error);
    }
  });

  // funcionalidad del email y password devueltos
  /**
   * Agrega evento click al botón de ingresar con email y password
  */
  const loginBtn = sectionLogin.querySelector('#buuton-log');
  loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    // Lee los datos ingresados por el usuario en el campo email y password
    const email = sectionLogin.querySelector('#username').value;
    const password = sectionLogin.querySelector('#password').value;

    // Instancia el label de error del login (donde se mostrarán los errores)
    const statusLogin = sectionLogin.querySelector('#statusLogin');

    // Valida que el usuario haya ingresado ambos datos
    if (email === '' || password === '') {
      statusLogin.innerText = 'You must enter your email and password before continuing';
      return null;
    }

    try {
      // Invoca función loginWithUserEmail del archivo lib/auth.js y recibe datos retornados
      const accessData = await loginWithUserEmail(email, password);
      if (accessData.loginOk) {
        navigateTo('/home'); // Si el ingreso del usuario es correcto lo redirige al Home.
      } else {
        // Si el ingreso del usuario es incorrecto muestra un mensaje de error
        // en el label id="statusLogin" según el error que se recibe desde Firebase
        // hay muchas posibilidades de error. Sólo estamos mostrando mensajes personalizados
        // para 2 posibles errores: user-not-found y wrong-password
        switch (accessData.data.code) {
          case 'auth/user-not-found':
            // link para documentación: https://firebase.google.com/docs/auth/admin/errors?hl=es-419
            statusLogin.innerText = 'Sorry, we couldn \'t find your account';
            break;
          case 'auth/wrong-password':
            statusLogin.innerText = 'The password is invalid';
            break;
          default:
            statusLogin.innerText = 'There was a problem with your login. Contact the administrator of the App';
        }
      }
    } catch (error) {
      // Si algo falla en el proceso de login con Google muestra este log por consola y muestra
      // un error en el label id="statusLogin"
      console.warn('Login.js - loginBtn - click - Error: ', error);
      statusLogin.innerText = 'We had a problem. Try again later';
    }

    return null;
  });

  /**
   *Funcion de la animacion del librito
   */
  // Obtener referencia al elemento del icono
  const icon = document.getElementsByClassName('.img-login');

  /**
  * Funcion para llevar a la ruta de registrado ---
  */
  const crearCuentaBtn = sectionLogin.querySelector('#create-accoun');
  crearCuentaBtn.addEventListener('click', async () => navigateTo('/register'));
  validarRutaLogin(navigateTo, (isLogged) => {});

  return sectionLogin;
}
export default login;
