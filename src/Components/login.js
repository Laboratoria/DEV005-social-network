function login(navigateTo) {
  const tittle = document.createElement('h1');
  const paragraph = document.createElement('p');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'inputEmail';
  const inputPassword = document.createElement('input');
  inputPassword.id = 'inputPassword';
  const buttonLogin = document.createElement('button');
  const buttonGoBack = document.createElement('button');

  tittle.textContent = 'Login';
  paragraph.textContent = 'Regístrate para conocer mas mujeres empoderadas con ganas de viajar y conocer sus experiencias de primera mano';

  inputEmail.placeholder = 'Correo Electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Registrate';
  buttonGoBack.textContent = 'Regresar';

  buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('inputEmail').value;
    const emailInput = document.getElementById('inputPassword').value;
    console.log(nameInput);
    console.log(emailInput);
  });
  buttonGoBack.addEventListener('click', () => {
    navigateTo('/');
  });
  form.append(tittle, paragraph, inputEmail, inputPassword, buttonLogin, buttonGoBack);
   return form;
 
}
console.log('Hola');

export default login;
