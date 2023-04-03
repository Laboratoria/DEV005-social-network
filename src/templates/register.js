export function Register() {
  return `<h2>Registrate</h2>
  <section id="container-register">
    <section id="passAndEm">
    <label for="email" class="cEmail">Correo electronico:
    <input  type="email" id="email" ></label>
    <label for="user" class="cUser">Usuaria:
    <input  type="text" id="user" ></label>
    <label for="password" class="cPassword">Contaseña:
    <input type="password" id="password"></label>
    </section>
    
    <section id="register">
    <button id="btn-register">Registrate</button>
    <p>¿Ya tienes cuenta? </p>
    <a href="">Inicia sesion</a>
    <a href=""><img src="./img/2000px-Google_G_Logo.svg_.png" alt="google logo" id="google-Logo" width="30px"></a>
    </section>
    </section>`;
}
