// Declara una constante llamada "home" que es igual a una función flecha sin parámetros
const home = () => {
    // Crea un elemento HTML <section> y lo guarda en una constante llamada "container"
    const container = document.createElement("section");
    // Añade la clase "four" al elemento <section>
    container.classList.add("four");
    // Declara una constante llamada "viewHome" que es igual a una cadena de texto con un mensaje de no disponible
    const viewHome = `
        <h3>no disponible por el momento, soy el home</h3>
    `;
    // Inserta el contenido HTML de "viewHome" dentro del elemento <section> creado antes
    container.innerHTML = viewHome;

    // Retorna el elemento <section> con el mensaje de no disponible
    return container;
};

// Exporta la función "home" para que pueda ser utilizada en otros módulos
export { home };
