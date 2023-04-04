import { login } from './templates/login.js';
import { registro } from './templates/registro.js';
import error  from './templates/error.js';

const contenido = document.getElementById('contenido');

const rutas = [
    {path: '/', component: login },
    {path: '/registro', component: registro },
    {path: '/error', component: error}
];

const rutaPorDefecto = '/';

export function navegacion(hash) {
    const ruta = rutas.find((ruta) => ruta.path === hash);

    if (ruta && ruta.component){
        window.history.pushState(
            {},
            ruta.path,
            window.location.origin + ruta.path
        );

        if(contenido.firstChild) {
            contenido.removeChild(contenido.firstChild);
        }

        contenido.appendChild(ruta.component(navegacion));
    } else {
        navegacion('/error');
    }
}

window.onpopstate = () => {
    navegacion(window.location.pathname);
};

navegacion(window.location.pathname || rutaPorDefecto);
