import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/index.js';
import { login } from './templates/login.js';
import { registro } from './templates/registro.js';
import error from './templates/error.js';
import home from './templates/home.js';

const contenido = document.getElementById('contenido');

const rutas = [
  { path: '/', component: login },
  { path: '/registro', component: registro },
  { path: '/error', component: error },
  { path: '/home', component: home },
];

const rutaPorDefecto = '/';

export function navegacion(hash) {
  // eslint-disable-next-line no-shadow
  const ruta = rutas.find((ruta) => ruta.path === hash);

  if (ruta && ruta.component) {
    window.history.pushState(
      {},
      ruta.path,
      window.location.origin + ruta.path,
    );

    if (contenido.firstChild) {
      contenido.removeChild(contenido.firstChild);
    }

    contenido.appendChild(ruta.component(navegacion));
  } else {
    navegacion('/error');
  }
}

window.onpopstate = () => {
  navegacion(window.location.pathname);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    navegacion('/home');
  } else if (window.location.pathname !== '/home' && !user) {
    navegacion(window.location.pathname || rutaPorDefecto);
  } else {
    navegacion(rutaPorDefecto);
  }
});
