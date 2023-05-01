export const LoginTemplate = `
<header>
<h1 >Sister Voyage</h1>
</header>
  <h2>Iniciar sesión</h2>
  <form id="signIn">
  <section id="container-login">
    <section class="passAndEm">
    <label for="email" class="cEmail">Correo electrónico:
    <input  type="email" id="email" ></label>
    <label for="password" class="cPassword">Contaseña:
    <input type="password" id="password" ></label>
    <p id='errorMsj'></p>
    <button id="btn-login">Ingresa</button>
    </section>
    
    <section id="login">
    </form>
    <p>¿Eres nueva? </p>
    
    <button id="linkRegister">Regístrate</button>

    <button class="google-btn" id= "btn-google">Accede con Google
    <div class="google-icon-wrapper">
      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </div>
    </button>
    </section>
    </section>
`;
