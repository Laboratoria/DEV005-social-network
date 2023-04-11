import { onAuthStateChanged } from 'firebase/auth';
import { login } from './components/login.js';
import { signup } from './components/signup.js';
import error from './components/error.js';
import wall from './components/wall.js';
import { auth } from './lib/firebase.js';

const root = document.getElementById('root');

// root.append(register());
const routes = [
  { path: '/login', component: login },
  { path: '/register', component: signup },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
];

const defaultRoute = '/login';

export function navigateTo(hash) {
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

function initRouter() {
  onAuthStateChanged(auth, (user) => {
    const currentRoute = window.location.pathname;
    if (user) {
      navigateTo('/wall');
    } else if (currentRoute === defaultRoute || currentRoute === '/register') {
      navigateTo(currentRoute);
    } else {
      navigateTo('/error');
    }
  });
}
initRouter();
