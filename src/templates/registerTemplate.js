export const RegisterTemplate = `
<header>
<h1>Sister Voyage</h1>
</header>
  <h2>Crea tu cuenta</h2>
  <section id="container-register">
  <form id="signup">
    <section class="passAndEm">
    <label for="email" class="cEmail">Correo electrónico:
    <input  type="email" id="email" required ></label>
    <label for="user" class="cUser">Usuaria:
    <input  type="text" id="user" required ></label>
    <label for="password" class="cPassword">Contaseña:
    <input type="password" id="password" required></label>
    <p id="errorMsj"></p>
    <button type="submit" id="btn-register">Regístrate</button>
    </section>
    
    <section id="register">
    
    <p>¿Ya tienes cuenta? </p>
    <button id="linkLogin">Inicia sesión</button>
    </section>
  </form>
  </section>
`;
