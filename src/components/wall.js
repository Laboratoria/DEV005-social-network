import { logoutApp } from '../lib/logout.js';

const navigateToLoginAfterLogout = (navigateTo) => {
  const callLogoutApp = (event) => {
    event.preventDefault();
    logoutApp(navigateTo);
  };
  return callLogoutApp;
};

function wall(navigateTo) {
  const btnLogout = document.createElement('button');
  btnLogout.classList.add('btn-logout');
  btnLogout.textContent = 'cerrar sesión';
  btnLogout.addEventListener('click', navigateToLoginAfterLogout(navigateTo));
  return btnLogout;
}
export default wall;
