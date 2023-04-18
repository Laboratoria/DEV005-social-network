import { logoutApp } from '../lib/logout.js';

const navigateToLoginAfterLogout = (navigateTo) => {
  const callLogoutApp = (event) => {
    event.preventDefault();
    logoutApp(navigateTo);
  };
  return callLogoutApp;
};

function wall(navigateTo) {
  const containerGrande = document.createElement('div');
  containerGrande.classList.add('register-container');
  const containerAviso = document.createElement('div');
  containerAviso.classList.add('container-aviso');
  const aviso = document.createElement('h2');
  aviso.textContent = 'Próximamente aquí estarán las publicaciones. Developers trabajando';
  const btnLogout = document.createElement('button');
  btnLogout.classList.add('btn-logout');
  btnLogout.textContent = 'cerrar sesión';
  btnLogout.addEventListener('click', navigateToLoginAfterLogout(navigateTo));
  containerAviso.append(aviso, btnLogout);
  containerGrande.append(containerAviso);
  return containerGrande;
}
export default wall;
