import {
  googleLogin, loginWithUserEmail,
} from '../lib/auth';
import { validarRutaLogin } from '../utilitaries/ruteo';

function login(navigateTo) {
  const sectionLogin = document.createElement('section');
  sectionLogin.className = 'section-reguistro';
  sectionLogin.innerHTML = '';
  sectionLogin.innerHTML += `
          <div class="title-login">
             <div class="img-login">
              <img src="https://us.123rf.com/450wm/jemastock/jemastock1705/jemastock170509947/78496592-imagen-en-color-de-dibujos-animados-de-plantas-con-hojas-en-la-ilustraci%C3%B3n-de-vector-de-crecimiento.jpg">
             </div>
             <div>
              <h2>App Book<h2>
             </div>
          </div>
          <div class="form-login">
            <form>
              <label for="username">Username</label>
              <input type="email" name="username" id="username" placeholder="username">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" placeholder="password">
              <button class="buuton-log">Log in</button>
            </form>
            <div>
              <figure><button ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/250px-Octicons-mark-github.svg.png"></button></figure>
              <figure><button class="login-google-btn" id="loginGogleBtn"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"></button></figure>
            </div>
          </div>
            <div class="create-account-login" id="create-accoun"><button>create new account</button></div>
          </form>
  `;
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
  const crearCuentaBtn = sectionLogin.querySelector('#create-accoun');
  crearCuentaBtn.addEventListener('click', async () => navigateTo('/register'));
  validarRutaLogin(navigateTo, (isLogged) => {});

  return sectionLogin;
}
export default login;
