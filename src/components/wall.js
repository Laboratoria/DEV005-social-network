/* eslint-disable no-console */
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

function wall(navigateTo) {
  const sectionWall = document.createElement('section');
  sectionWall.id = 'wall-section';
  const navBar = document.createElement('nav');
  navBar.id = 'nav-bar';
  const btnLogOut = document.createElement('button');
  btnLogOut.id = 'log-out';
  btnLogOut.textContent = 'Cerrar Sesión';
  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = '¡Bienvenida a KittyBook!';
  const msg = document.createElement('p');
  msg.textContent = 'Este sitio está en construcción. Esperamos verte pronto';

  const kittyImage = document.createElement('img');
  kittyImage.id = 'construction';
  kittyImage.src = '/images/working-cat.png';
  kittyImage.alt = 'Working kitty';

  const btnReturnH = document.createElement('button');
  btnReturnH.className = 'return';
  btnReturnH.textContent = 'Volver a inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  btnLogOut.addEventListener('click', () => {
    signOut(auth);
    console.log('Clickaste cerrar sesión');
  });

  navBar.append(btnLogOut);
  sectionWall.append(navBar, welcomeMsg, msg, kittyImage);

  return sectionWall;
}

export default wall;
