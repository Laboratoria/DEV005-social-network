import logo from '../assets/logo.png';

function singUp() {
  const templateSingUp = `<header>
    <img id="registerImg" src=${logo} alt="Logo" />
  </header>
  <main>
    <label id="register">
      <h1 class="welcome">Registro</h1>
    </label>
    <form class="container">
     <section id="box">
     <section id="other">
      <label for="name" class="name">Nombre</label>
      <input type="text" class="nameText" value="" required pattern="[A-z]+" placeholder="Maria" />
     </section>
      <section id="other-box">
      <label for="lastName" class="lastName">Apellido</label>
      <input type="text" class="lastNametext" value="" required pattern="[A-z]+" placeholder="Xion" />
        </section>
      </section> 
      <label for="userName" class="email">Crea tu Nombre de Ususario</label>
      <input type="text" class="text"  value="" required pattern="[A-z]+" placeholder="mariaX" autocomplete="username" />
      <label class="gotUser"></label>
      <label for="email" class="email">Email</label>
      <input type="email" class="text" value="" required pattern="(@)(.+)$" placeholder="mariaX@gmail.com" autocomplete="username" />
      <label for="password" class="password">Contraseña</label>
      <input type="password" class="text" id="passwordValue" value="" minlength="6" maxlength="16" required pattern="^[\\p{L}]\${1, 25}" placeholder="******" autocomplete="new-password" />
      <label for="password" class="passwordValid">Confirma contraseña</label>
      <input type="password" class="text" id="passwordRepeat" value="" minlength="6" maxlength="16" required pattern="^[\\p{L}]\${1, 25}" placeholder="******" autocomplete="new-password"  />
      <label for="text" id="notMatch"></label>       
      <button id="singUp">Registrar</button>
      <label for="text" class="singInG">O registrese con:</label>
      <button id="google" href="">Continuar con Google</button>
      <button type= "submit" id="prueba">hola</button>
</form>`;
  return templateSingUp;
}

export default singUp;
