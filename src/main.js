import './Components/firebase.js';
import home from './Components/home.js';
import login from './Components/login.js';
import loginGoogle from './Components/logginGoogle.js';
import error404 from './Components/error404.js';

const root = document.getElementById('root');
// creando rutas
const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/loginGoogle', component: loginGoogle },
  { path: '/error404', component: error404 },
];

const defaultRoute = '/';

function navigateTo(hans) {
  const route = routes.find((routeFind) => routeFind.path === hans);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
   
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error404');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
