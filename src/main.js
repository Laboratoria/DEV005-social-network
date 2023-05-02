// Importación de componentes de página desde sus respectivos archivos
import { welcome } from "./pages/welcome.js";
import { login } from "./pages/login.js";
import { register } from "./pages/register.js";
import { error } from "./pages/error.js";
import { home } from "./pages/home.js";

// Obtener el elemento HTML con el ID "content" y almacenarlo en una variable llamada "content"
const content = document.querySelector("#content");
// Definición de una matriz de rutas, cada una de las cuales contiene una ruta y un componente de página correspondiente
const routes = [
    { path: "/", page: home },
    { path: "/welcome", page: welcome },
    { path: "/login", page: login },
    { path: "/register", page: register },
    { path: "/error", page: error },
];

// Estableciendo la ruta por defecto a "/"
const defaultRoute = "/";
// Definiendo una función para encontrar la ruta correcta basada en la ruta de respuesta y navegando hacia ella
const findRouteAndNavigate = (response) => {
    // Encontrar la ruta con la ruta correspondiente
    const routesList = routes.find((route) => route.path === response);
    if (routesList && routesList.page) {
        // Si se encuentra una ruta coincidente y tiene un componente de página, actualice la URL y reemplace la página actual con el nuevo componente de página
        window.history.pushState({}, routesList.path, window.location.origin + routesList.path);
        if (content.firstChild) {
            // Eliminar contenido existente
            content.removeChild(content.firstChild);
        }
        // Agregar el nuevo componente de pagina
        content.appendChild(routesList.page(findRouteAndNavigate));
    } else {
        // Si no se encuentra ninguna ruta coincidente o no tiene un componente de página, vaya a la página de error
        findRouteAndNavigate("/error");
    }
};

// Cuando el usuario navega usando los botones atrás/adelante, encuentra la ruta correcta y navega hacia ella
window.onpopstate = () => {
    findRouteAndNavigate(window.location.pathname);
};

// Navegar a la ruta actual (o la ruta predeterminada si no se especifica ninguna ruta)
findRouteAndNavigate(window.location.pathname || defaultRoute);

//creando boton registrarse//
const butonRegister = document.getElementById("registerMailBtn");

if (butonRegister) {
    //eventos de elementos del DOM//
    butonRegister.addEventListener("click", () => {
        console.log(butonRegister);
        //agregar funcion de register//
    })
}