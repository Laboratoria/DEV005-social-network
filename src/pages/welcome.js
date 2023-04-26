// Define una función llamada 'welcome' que recibe un argumento llamado 'findRouteAndNavigate'
const welcome = (findRouteAndNavigate) => {
    // Crea un elemento 'section' en el DOM y lo guarda en la variable 'container'
    const container = document.createElement("section");
    // Añade la clase 'one' al elemento 'section'
    container.classList.add("one");
    // Crea una cadena de texto con una plantilla de HTML que representa la vista de bienvenida
    const viewWelcome = `
  <div>
  <figure class="homeLogo">
      <img src="./img/logo.png" alt="logo SportX" class="logoOne"/>
  </figure>
  <figure class="homeImage">
      <img src="./img/deporte.png" alt="logo deporte" class="image"/>
  </figure>
  <div class="buttonsLR">
   <article class="textLR">
      <a class="registerBtn" id="registerBtn">Regístrate</a>
      <span>|</span>
      <a  class="loginBtn" 
      id="loginBtn">Inicia sesión</a>
   </article>
  </div> 
</div>
`;
    // Inserta la vista de bienvenida dentro del elemento 'container' utilizando 'innerHTML'
    container.innerHTML = viewWelcome;
    // Obtiene el elemento 'a' con el ID 'loginBtn' dentro del elemento 'container'
    const loginBtn = container.querySelector("#loginBtn");
    // Añade un evento 'click' al elemento 'a' y llama la función 'findRouteAndNavigate' con el argumento '/login'
    loginBtn.addEventListener("click", () => {
        findRouteAndNavigate("/login");
    });
    // Obtiene el elemento 'a' con el ID 'registerBtn' dentro del elemento 'container'
    const registerBtn = container.querySelector("#registerBtn");
    // Añade un evento 'click' al elemento 'a' y llama la función 'findRouteAndNavigate' con el argumento '/register'
    registerBtn.addEventListener("click", () => {
        findRouteAndNavigate("/register");
    });

    // Retorna el elemento 'container', que contiene la vista de bienvenida y los eventos 'click' asociados a los botones de registro e inicio de sesión
    return container;
};

// Exporta la función 'welcome' para que pueda ser utilizada en otros módulos
export { welcome };
