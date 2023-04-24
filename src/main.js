import muro from './components/muro.js';
import error from './components/error.js';
import home from './components/home.js';
import registro from './components/registro.js';
import './components/firebase.js';
import logMicrosoft from './components/microsoftlogin.js';
import registerUsers from './components/registerUsers.js';
import loginEmailAndPass from './components/emailandpass.js';

const root = document.getElementById('root');
// Rutas
const routes = [
  { path: '/', component: home },
  { path: '/registro', component: registro },
  { path: '/error', component: error },
  { path: '/muro', component: muro },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

const microsoftButton = document.getElementById('loginMicrosoft');
microsoftButton.addEventListener('click', logMicrosoft);

const registerButton = document.getElementById('register');
registerButton.addEventListener('click', () => {
  navigateTo('/registro');
});

const registerUsersButton = document.getElementById('register-b');
registerUsersButton.addEventListener('click', () => {
  registerUsers
});

const loginPatitas = document.getElementById('login')
loginPatitas.addEventListener('click', () => {
  loginEmailAndPass
});
