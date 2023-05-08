import { homeLogic } from "../lib/homeLogic.js";
// Declara una constante llamada "home" que es igual a una función flecha sin parámetros
const home = () => {
    // Crea un elemento HTML <section> y lo guarda en una constante llamada "container"
    const container = document.createElement("section");
    // Añade la clase al elemento
    container.classList.add("four");
    // Declara una constante llamada "viewHome" que es igual a una cadena de texto con un mensaje de no disponible
    const viewHome = `
    <div class="signOff">
        <button button type="submit" id="signOffBtn">Cerrar Sesión</button>
    </div>
    <figure>
    <img src="./img/logo.svg" alt="logo SportX" />
    </figure>
    <div>
        <input type="text" placeholder="¿En qué estás pensando ahora?" id="commentField" class="commentField" />
        <button id="publishBtn" class="publishBtn" >Publicar</button>
    </div>
    <article class="fieldPublications">
    <section id="publications" class="publications"></section>
    </article>
    `;
    // Inserta el contenido HTML de "viewHome" dentro del elemento <section> creado antes
    container.innerHTML = viewHome;
    homeLogic(container);
    // Retorna el elemento <section> con el mensaje de no disponible
    return container;
};

// Exporta la función "home" para que pueda ser utilizada en otros módulos
export { home };
