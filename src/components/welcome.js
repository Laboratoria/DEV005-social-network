import { welcomeTemplate } from '../template/welcome-template';
import { validarRutaLogin } from '../utilitaries/ruteo';

function welcome(navigateTo) {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.className = 'section-welcome';
  sectionWelcome.innerHTML = welcomeTemplate;

  /**
  * Funcion para llevar a la ruta de registrado ---
  */

  // ventana para dirigir y logearse con tu correo y contraseña ya recibido
  const directionOpenLogin = sectionWelcome.querySelector('#btn-login-welcom');
  directionOpenLogin.addEventListener('click', async () => navigateTo('/login'));
  // sectionWelcome.append()
  return sectionWelcome;
}
export default welcome;
