import { welcomeTemplate } from '../template/welcome-template';
import { googleLogout } from '../lib/auth';

function welcome(navigateTo) {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.className = 'section-welcome';
  sectionWelcome.innerHTML = welcomeTemplate;

  // ventana para dirigir y logearse con tu correo y contraseña ya recibido
  const directionOpenLogin = sectionWelcome.querySelector('#btn-login-welcom');
  directionOpenLogin.addEventListener('click', async () => {
    googleLogout();
    navigateTo('/login');
  });
  // sectionWelcome.append()
  return sectionWelcome;
}
export default welcome;
