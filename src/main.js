// firebase
import './components/firebase.js';
// Este es el punto de entrada de tu aplicacion
import home from './components/login.js';
import singUp from './components/singUp.js';
import error from './components/error.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
  { path: '/singUp', component: singUp.component, postRender: singUp.postRender },
  { path: '/error', component: error },
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
    if (route.component() === '') {
      root.remove(root.innerHTML);
    }
    root.innerHTML = route.component(navigateTo);
    if (route.postRender) {
      route.postRender();
    }
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

const botton = document.getElementById('singUp');
botton.addEventListener('click', () => {
  navigateTo('/singUp');
});
