import { signIn } from '../lib/auth.js';

// pantalla - inicio de sesión
export function login(navigateTo) {
  const sectionLogin = document.createElement('section');
  sectionLogin.classList.add('sectionLogin');
  sectionLogin.innerHTML = `
  <img src='https://firebasestorage.googleapis.com/v0/b/social-network-dev-005.appspot.com/o/assets%2FLogo.png?alt=media&token=feddabaf-9c84-4263-a12f-7244c595f987' class= 'logo2'>
    <form class="formInteraction" >
    <h2 class="initSection">Inicio de Sesión</h2>
    <label class="labelEmail">Correo Electronico</label>
    <input class="inputEmail" id="inputEmail" placeholder="ejemplo@gmail.com"></input>
    <label class="labelPassword">Contraseña</label>
    <input class="inputPassword" id="inputPassword" type="password" placeholder="********"></input>
    <span class="note1" id"note1"></span>
    <button type="submit" class="getInt">Ingresar</button>
    </form>
    <button class="bottomTextLogin">¿No tienes una cuenta? Regístrate</button>
    </section >
    `;

  const checkIn = sectionLogin.querySelector('.bottomTextLogin');
  checkIn.addEventListener('click', () => {
    navigateTo('/register');
  });

  const formLogin = sectionLogin.querySelector('.formInteraction');
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = sectionLogin.querySelector('.inputEmail').value;
    const password = sectionLogin.querySelector('.inputPassword').value;
    signIn(email, password)
      .then(() => {
        navigateTo('/emprende');
      })
      .catch((err) => {
        sectionLogin.querySelector('.note1').innerHTML = `${err.message}`;
      });
  });

  return sectionLogin;
}
