import registerConfig from '../lib/registerConfig.js';

const register = (navigateTo) => {
  const formularioRegister = document.createElement('div');
  formularioRegister.className = 'formularioRegister';

  formularioRegister.innerHTML = '';
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
  /* uttonSaveInformation.addEventListener('click', () => {
    navigateTo('/login');
  }); */

  // TODO: botón para registrar
  const buttonSaveInformation = formularioRegister.querySelector('.buttonSaveInformation');
  buttonSaveInformation.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = formularioRegister.getElementById('emailRegister').value;
    const password = formularioRegister.getElementById('passwordRegister').value;
    registerConfig(email, password)
      .then(() => {
        console.log(email, password);
        navigateTo('/login');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-user') {
          alert('correo en uso');
        } else if (error.code === 'auth/invalid-email') {
          alert('correo inválido');
        } else if (error.code === 'auth/weak-password') {
          alert('contraseña muy corta');
        } else {
          alert('otro problema');
        }
        return error;
      });
  });
  return formularioRegister;
};

export default register;
