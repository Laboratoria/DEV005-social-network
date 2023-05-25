// Este es el punto de entrada de tu aplicacion

import home from './components/home.js';
import login from './components/login.js';
import error from './components/error.js';

import register from './components/register.js';
import welcome from './components/welcome.js';

// rutas para la navegacion
const routes = [
  { path: '/', componentes: home },
  { path: '/login', componentes: login },
  { path: '/error', componentes: error },
  { path: '/register', componentes: register },
  { path: '/welcome', componentes: welcome },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  console.log(`heko ${route.path}`);

  if (route && route.componentes) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.componentes(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
