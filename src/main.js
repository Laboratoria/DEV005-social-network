import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/index.js';
import { login } from './templates/login.js';
import { register } from './templates/register.js';
import error from './templates/error.js';
import { home } from './templates/home.js';

const root = document.getElementById('root');

// Se crean rutas para diferentes vistas

const routes = [
  { path: '/', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/home', component: home },
];

// Ruta por defecto
const defaultRoute = '/';

// Función que permite navegar por la rutas
export function navigation(hash) {
  // eslint-disable-next-line no-shadow
  const route = routes.find((route) => route.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    root.appendChild(route.component(navigation));
  } else {
    navigation('/error');
  }
}

window.onpopstate = () => {
  navigation(window.location.pathname);
};

// Función para validar que usuario este logueado

export const authUser = onAuthStateChanged(auth, (user) => {
  if (user) {
    navigation('/home');
  } else if (window.location.pathname !== '/home' && !user) {
    navigation(window.location.pathname || defaultRoute);
  } else {
    navigation(defaultRoute);
  }
});
