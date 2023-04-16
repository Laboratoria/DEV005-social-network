function home(navigateTo) {
  const form = document.createElement('form');
  const tittle = document.createElement('h1');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonInit = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const paragraph = document.createElement('p');
  const buttonRecord = document.createElement('button');

  tittle.textContent = 'Viajeras Empoderadas';
  inputEmail.placeholder = 'Correo Electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonInit.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = 'Ingresar con Google';
  paragraph.textContent = 'Has olvidado tu contraseña?';
  buttonRecord.textContent = 'Regìstrate';

  buttonGoogle.addEventListener('click', () => {
    navigateTo('/loginGoogle');
  });
  buttonRecord.addEventListener('click', () => {
    navigateTo('/login');
  });

  form.append(tittle, inputEmail, inputPassword, buttonInit, buttonGoogle, paragraph, buttonRecord);
  return form;
}
export default home;
