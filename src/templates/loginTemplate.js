export const LoginTemplate = `
  <h2>Iniciar sesion</h2>
  <section id="container-login">
    <section id="passAndEm">
    <label for="email" class="cEmail">Correo electronico:
    <input  type="email" id="email" ></label>
    <label for="password" class="cPassword">Contaseña:
    <input type="password" id="password"></label>
    <button id="btn-login">Ingresa</button>
    </section>
    
    <section id="login">
    
    <p>¿Eres nueva? </p>
    
    <button id="linkRegister">Registrate</button>

    <div class="google-btn" id= "btn-google">
    <div class="google-icon-wrapper">
      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </div>
      <p class="btn-text"><b>Acceder con Google</b></p>
    </div>
    </section>
    </section>
`;
