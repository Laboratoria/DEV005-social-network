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
    <a id="linkRegister" href="">Registrate</a>
    <a href=""><img src="./img/2000px-Google_G_Logo.svg_.png" alt="google logo" id="google-Logo" width="30px"></a>
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
