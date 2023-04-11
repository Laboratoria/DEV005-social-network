import home from './components/home.js';
import error from './components/error.js';

/* myFunction(); */
const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
  /* {path: '/login', component: login}, */
  { path: '/error', component: error },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    // appendChild para traer solo un elemento, y se usa append para mas de un elemento
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
// pathname solo toma lo que va despues de slash en la ruta
navigateTo(window.location.pathname || defaultRoute);
