// import registroApp  from '..controller.js'

function register() {
  const formularioRegister = document.createElement('div');
  formularioRegister.className = 'formularioRegister';

  // formularioRegister.innerHTML = '';
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

  const registrarse = formularioRegister.querySelector('.infoRegister');
  console.log(registrarse);

  //(evento click
  //registroApp(emailUser, passworUser).then(res=>dkaldkas)

  console.log(formularioRegister);
  return formularioRegister;
}

export default register;
