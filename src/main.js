import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import home from './components/home.js';
import error from './components/error.js';
import muro from './components/muro.js';
import registro from './components/registro.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCMA-XWyMc2_N3RuceKDj37LA6NLOEnAME',
  authDomain: 'patitas-91318.firebaseapp.com',
  projectId: 'patitas-91318',
  storageBucket: 'patitas-91318.appspot.com',
  messagingSenderId: '921200296229',
  appId: '1:921200296229:web:df299b6a8def7ea1399acc',
  measurementId: 'G-114X4TQL1F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = document.getElementById('root');

// Rutas
const routes = [
  { path: '/', component: home },
  { path: '/registro', component: registro },
  { path: '/error', component: error },
  { path: '/muro', component: muro },
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
