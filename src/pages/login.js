// Declara una constante llamada "login" que es igual a una función flecha con un parámetro llamado "findRouteAndNavigate"
const login = (findRouteAndNavigate) => {
    // Crea un elemento HTML <section> y lo guarda en una constante llamada "container"
    const container = document.createElement("section");
    // Añade la clase "two" al elemento <section>
    container.classList.add("two");
    // Declara una constante llamada "viewLogin" que es igual a una cadena de texto con el contenido HTML del formulario de inicio de sesión
    const viewLogin = `
<div class="bannerOne">
  <div class="loginLogo">
   <img src="./img/logo.png" alt="logo SportX" class="logoTwo"/>
  </div>
  <div class="loginForm">
   <div>
     <label>Correo</label>
     <input id="mailUserLogin" type="text" placeholder="example@gmail.com" />
   </div>
   <div>
     <label>Contraseña</label>
     <input id="passwordUserLogin" type="password" placeholder="***********" />
   </div>
 </div>
 <div class="botonesInicioSesion">
   <div class="loginBtn">
     <input id="loginBtn" type="submit" value="Iniciar Sesión" />
   </div>
   <div class="loginGmailBtn">
     <button id="loginGmailBtn">
         <img src="./img/google.png" alt="google" class="imgGoogle"/>
         Iniciar con Google
     </button>
   </div>
   <div class="volverRegistro">
     <span>¿No tienes cuenta?</span>
     <a id="registerBtn">Regístrate</a>
   </div>
   <div class="recoverPassword">
     <a>Olvidé mi contraseña</a>
   </div>
 </div>
<div>
`;
    // Inserta el contenido HTML de "viewLogin" dentro del elemento <section> creado antes
    container.innerHTML = viewLogin;
    // Busca el elemento con el ID "registerBtn" dentro del elemento <section> creado antes y lo guarda en una constante llamada "registerBtn"
    const loginBtn = container.querySelector("#loginBtn");
    // Añade un evento de click al botón de registro para redirigir al usuario a la página de registro
    loginBtn.addEventListener("click", () => {
        // Ejecuta la función "findRouteAndNavigate" con el parámetro "/login" para redirigir al usuario a la página de registro
        findRouteAndNavigate("/login");
    });

    // Retorna el elemento <section> con el formulario de inicio de sesión y el botón de registro
    return container;
};

// Exporta la función "login" para que pueda ser utilizada en otros módulos
export { login };
