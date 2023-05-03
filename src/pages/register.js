import { registerLogic } from "../lib/registerLogic";

// Define una función "register" que toma un argumento "findRouteAndNavigate"
const register = (findRouteAndNavigate) => {
    // Crea un nuevo elemento <section> y guárdalo en la variable "container"
    const container = document.createElement("section");
    // Agrega la clase CSS "three" al elemento "container"
    container.classList.add("three");
    // Define una cadena de código HTML con marcadores de posición para datos dinámicos y guárdalo en la variable "viewRegister"
    const viewRegister = ` 
    <div>
    <img src="./img/logo.svg" alt="logo SportX" class="logoThree"/>
    </div>
    <div class="registrationForm">
    <div>
    <label>Usuario</label>
    <input id="userNameRegister" type="text" placeholder="Nombre">
    <p id='messageErrorUserRegister' class='messageErrorUserRegister'></p>
    </div>
    <div>
    <label>Correo electrónico</label>
    <input id="userMailRegister" type="text" placeholder="ejemplo@gmail.com">
    <p id='messageErrorMailRegister' class='messageErrorMailRegister'></p>
    </div>
    <div>
    <label>Contraseña</label>
    <input id="userPasswordRegister" type="password" placeholder="******">
    <p id='messageErrorPasswordRegister' class='messageErrorPasswordRegister'></p>
    </div>
    <div>
    </div>
    <div class="botonesRegistro">
        <div class="registerBtn">
            <input  id='registerBtn' type="submit" value="Registrarse">
        </div>
        <div class="volverInicioSesion">
            <span>¿Ya tienes cuenta?</span>
            <a id="loginBtn">Iniciar Sesión</a>
        </div>
    </div>
      `;
    // Rellena el elemento "container" con el código HTML almacenado en "viewRegister"
    container.innerHTML = viewRegister;
    // "registerLogic" se define en otro módulo y se encarga de manejar la lógica del formulario de registrarse.
    registerLogic(container);
    // Encuentra el elemento con el ID "register" dentro del elemento "container" y guárdalo en la variable "registerB"
    const loginBtn = container.querySelector("#loginBtn");
    // Agrega un event listener de clic al elemento "loginBtn", que ejecuta una función cuando se hace clic
    loginBtn.addEventListener("click", () => {
        // La función llama a la función "findRouteAndNavigate" con el argumento "/register"
        findRouteAndNavigate("/login");
    });
    // Devuelve el elemento "container"
    return container;
};

// Exporta la función "register" para que se pueda importar y utilizar en otros archivos
export { register };
