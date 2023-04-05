//import { funcion a crear } from './lib/index.js';
import { init, login } from './Components/app.js';
import './Firebase/firebase.js';

const root = document.getElementById('root');
root.append(init());
//rutas SPA
const routes = [
    { path: '/', component: init },
    { path: '/login', component: login },
    { path: '/error', component: error }
];
const defaultRoute = '/';

function navigateTo(hash) {
    const route = routes.find((routeFind) => routeFind.path === hash);
    if (route && route.component) {
        window.history.pushState(
            {}, route.path, window.location.origin + route.path);

        if (root.firstChild) {
            root.removeChild(root.firstChild)
        }
        root.append(route.component(navigateTo));
    } else {
        navigateTo('/error');
    }
}
navigateTo(window.location.pathname || defaultRoute);


