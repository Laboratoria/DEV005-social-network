import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { login } from './components/login.js';
import { signup } from './components/signup.js';
import error from './components/error.js';
import wall from './components/wall.js';

import { firebaseApp } from './lib/firebase.js';

const auth = getAuth(firebaseApp);

const root = document.getElementById('root');

// root.append(register());
const routes = [
  { path: '/', component: login },
  { path: '/signup', component: signup },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
];

const defaultRoute = '/';

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
    } else if (currentRoute === defaultRoute || currentRoute === '/signup') {
      navigateTo(currentRoute);
    } else if (currentRoute === '/wall') {
      navigateTo('/');
    } else {
      navigateTo('/error');
    }
  });
}
initRouter();
