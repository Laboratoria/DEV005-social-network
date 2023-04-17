import muro from './components/muro.js';
import error from './components/error.js';
import login from './components/login.js';
import home from './components/home.js';
import './components/firebase.js';
import logMicrosoft from './components/microsoftlogin.js';

const root = document.getElementById('root');
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
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
