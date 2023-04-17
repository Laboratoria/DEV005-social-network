// import { funcion a crear } from './lib/index.js';
import { mistake } from './Components/mistake.js';
import { mainScreen } from './Components/mainScreen.js';
import { init } from './Components/init.js';
import { login } from './Components/login.js';
import './lib/firebase.js';
import { create } from './Components/create.js';

const root = document.getElementById('root');
root.append(init());
// rutas SPA
const routes = [
  { path: '/', component: init },
  { path: '/login', component: login },
  { path: '/register', component: create },
  { path: '/error', component: mistake },
  { path: '/mainScreen', component: mainScreen },

];
const defaultRoute = '/';

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

navigateTo(window.location.pathname || defaultRoute);
/* export {
 navigateTo
}; */
