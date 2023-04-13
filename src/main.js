// import { funcion a crear } from './lib/index.js';
import {
  init, login, mistake, create, mainScreen,
} from './Components/app.js';
import './Components/firebase.js';

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

function navigateTo(hash) {
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
export {
  navigateTo,
};
