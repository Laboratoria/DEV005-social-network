export const RegisterTemplate = `
  <h2>Registrate</h2>
  <section id="container-register">
  <form id="signup">
    <section id="passAndEm">
    <label for="email" class="cEmail">Correo electronico:
    <input  type="email" id="email" required ></label>
    <label for="user" class="cUser">Usuaria:
    <input  type="text" id="user" required ></label>
    <label for="password" class="cPassword">Contaseña:
    <input type="password" id="password" required></label>
    <button type="submit" id="btn-register">Registrate</button>
    </section>
    
    <section id="register">
    
    <p>¿Ya tienes cuenta? </p>
    <a href="">Inicia sesion</a>
    </section>
  </form>
  </section>
`;
