import { Login } from './DOM/Login.js';
import { Wall } from './DOM/Wall.js';
import { Register } from './DOM/Register.js';
import error from './DOM/error.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: Login },
  { path: '/registrate', component: Register },
  { path: '/muro', component: Wall },
  { path: '/error', component: error },
];

const defaultRoute = '/';

function navigateTo(pathname) {
  const route = routes.find((routeFind) => routeFind.path === pathname);

  if (route && route.component) {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
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

/* const routes = {
  '/': Login,
  '/registrate': Register,
  '/muro': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component()); */
