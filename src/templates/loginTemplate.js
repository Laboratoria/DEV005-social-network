// eslint-disable-next-line import/no-cycle
export const LoginTemplate = `
  <h2>Iniciar sesion</h2>
  <section id="container-login">
    <section id="passAndEm">
    <label for="email" class="cEmail">Correo electronico:
    <input  type="email" id="email" ></label>
    <label for="password" class="cPassword">Contaseña:
    <input type="password" id="password"></label>
    </section>
    
    <section id="login">
    <button id="btn-login">Ingresa</button>
    <p>¿Eres nueva? </p>
    
    <button id="linkRegister">Registrate</button>

    <p> o inicia con </p>
    <div class="google-btn">
    <div class="google-icon-wrapper">
      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </div>
      <p class="btn-text"><b>Acceder con Google</b></p>
    </div>
    </section>
    </section>
`;

/* route: window.location.pathname = '/login'

document.createElement
content = document.createElement("div")
content.innerHTML = ....
return content
root.replaceChildren(Login())
content.querySelector(...
addEventListener
querySelector
getElementById
getElementsByClassName
elem.append
elem.remove...
elem.replaceChildren */
