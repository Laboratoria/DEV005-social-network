import { logoutApp } from '../lib/logout.js';

function wall() {
  const btnLogout = document.createElement('button');
  btnLogout.classList.add('btn-logout');
  btnLogout.textContent = 'cerrar sesión';
  btnLogout.addEventListener('click', (event) => {
    event.preventDefault();
    logoutApp();
  });
  return btnLogout;
}
export default wall;
