import { onAuthStateChanged } from 'firebase/auth';
import { mistake } from './Components/mistake.js';
import { home } from './Components/home.js';
import { init } from './Components/init.js';
import { login } from './Components/login.js';
import { create } from './Components/register.js';
import { auth } from './lib/firebase.js';

const root = document.getElementById('root');
root.append(init());
// rutas SPA
const routes = [
  { path: '/', component: init },
  { path: '/login', component: login },
  { path: '/register', component: create },
  { path: '/error', component: mistake },
  { path: '/emprende', component: home },

];

export function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.append(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
// For redirect users to stratus of sessions
onAuthStateChanged(auth, (user) => {
  if (user) {
    navigateTo('/emprende');
  } else if (window.location.pathname === '/emprende' && user === null) {
    navigateTo();
  } else {
    navigateTo(window.location.pathname);
  }
});
