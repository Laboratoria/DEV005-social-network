// eslint-disable-next-line import/no-named-as-default
import registerConfig from '../lib/registerConfig.js';

function register(navigateTo) {
  const formularioRegister = document.createElement('div');
  formularioRegister.className = 'formularioRegister';

  formularioRegister.innerHTML += `
  <div class="registerDiv"> 
   <div class="imgRegister"> 
    <h2 class="menssageRegisterRouter">Regístrate</h2>
   </div>
    <form class="infoRegister" id="formulario">
      <input type="email" class="emailRegister" id="emailregister" placeholder="Iniciar sesión" required> 
        <input type="password" class="passwordRegister" id="passwordregister" placeholder="Contraseña" required>
          <input type="password" class="checkPasswordRegister" id= "checkPasswordRegister" placeholder="Repetir contraseña" required>
            <button class="buttonSaveInformation" type="submit">Guardar</button>
    </form>
  </div>`;

  // TODO: botón para registrar
  const buttonSaveInformation = formularioRegister.querySelector('.buttonSaveInformation');
  console.log(buttonSaveInformation);
  buttonSaveInformation.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.emailRegister').value;
    console.log(email);
    const password = document.querySelector('.passwordRegister').value;
    console.log(password);
    registerConfig(email, password)
      .then(() => {
        console.log(email, password);
        navigateTo('/login');
      });
  });

  return formularioRegister;
}

export default register;
