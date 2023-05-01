import { loginConfig } from '../lib/loginConfig.js';

const login = (navigateTo) => {
  const formularioLogin = document.createElement('div');
  formularioLogin.className = 'formularioLogin';

  formularioLogin.innerHTML = '';
  formularioLogin.innerHTML += `
  <div class="loginDiv"> 
  <div class="imgLogin"> 
    <h2 class="messageLogin">Iniciar Sesión</h2>
    </div>
      <form class="credencialesdiv" id="formulario">
        <input type="email" class="loginCorreo" id="loginCorreo" placeholder="Correo Electrónico" required>
        <input type="password" class="loginContra" id="loginContra" placeholder="Contraseña" required>
      <button class="buttonReturn" type="submit">Ingresar</button> 
      </form>
    <span class="mensajelogin"> ¿No tienes una cuenta?
    <strong>Regístrate ahora</strong></span>
  </div>`;
  const mensajelogin = formularioLogin.querySelector('.mensajelogin');
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });
  const buttonReturn = formularioLogin.querySelector('.buttonReturn');
  buttonReturn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginCorreo'); // .value
    const password = document.getElementById('loginContra'); // .value;
    loginConfig(email.value, password.value)
      .then(() => {
        navigateTo('/muro');
      })
      .catch((error) => {
        if (error === 'auth/user-not-found') {
          console.log('No estas registrado, crea una cuenta');
        }
        if (error === 'auth/invalid-email') {
          console.log('Verifica el correo electronico ingresado');
        }
        if (error === 'auth/wrong-password') {
          console.log('Verifica la contraseña ingresada');
        } else {
          console.log('Verifica los datos ingresados');
        }
      });
  });
  return formularioLogin;
};
export default login;
