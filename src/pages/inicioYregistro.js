// Se obtiene el elemento HTML con el ID contenido y se guarda en la variable contenido.
const contenido = document.querySelector("#contenido");
// Se define una función registrarseYiniciarSesion. El uso de export indica que esta función puede ser importada y utilizada en otro archivo.
export const registrarseYiniciarSesion = () => {
    // Se crea un nuevo elemento HTML section y se guarda en la variable contenedor.
    const contenedor = document.createElement("section");
    // Se añade la clase inicio al elemento contenedor.
    contenedor.classList.add("inicio");
    // Se define una cadena de texto con el contenido HTML deseado y se guarda en la variable `vistaInicial`.
    const vistaInicial = `
        <figure class="inicioLogo">
            <img src="./img/logo.png" alt="logo SportX" class="logo"/>
        </figure>
        <figure class="inicioImagen">
            <img src="./img/deporte.png" alt="logo deporte" class="imagen"/>
        </figure>
        <div class="iniciarRegistrar">
         <article class="textoIR">
            <a class="registrateBtn" href='registroDeUsuario'>Regístrate</a>
            <span>|</span>
            <a class="iniciarSesionBtn" href='inicioDeSesion'>Inicia sesión</a>
         </article>
        </div>
    `;
    // Se establece el contenido HTML del elemento `contenedor` como la cadena de texto almacenada en la variable `vistaInicial`.
    contenedor.innerHTML = vistaInicial;
    // Se añade el elemento `contenedor` como un hijo del elemento `contenido` de la página.
    contenido.append(contenedor);
    // returnar contenedor;
    return contenedor;
};
