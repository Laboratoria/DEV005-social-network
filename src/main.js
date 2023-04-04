import { login } from './components/login.js';
import register from './components/register.js';

const root = document.getElementById('root');
// root.append(register());
const routes = [
    { path:'/', component: login },
    { path:'/register', component: register }
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
      root.appendChild(route.component());
    }
    
  }
  navigateTo(window.location.pathname);
