/* eslint-disable import/no-cycle */
// Para el DOM-
// Este es el punto de entrada de tu aplicacion

//------------------------------------------------------

// import logIn from './components/logIn.js';
// import signUp from './components/signUp.js';
// import welcome from './components/welcome.js';
// import home from './components/home.js';

import { Login } from './DOM/Login.js';
import { Wall } from './DOM/Wall.js';
import { Register } from './DOM/Register.js';

const root = document.getElementById('root');

const routes = {
  '/': Login,
  '/registrate': Register,
  '/muro': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
/* document.getElementById('root').innerHTML = Login(); */
/* document.getElementById('root').innerHTML = Register() */
