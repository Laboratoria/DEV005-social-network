// LOGIN

function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonAccess = document.createElement('button');

  inputEmail.placeholder = 'Ingrese su correo';
  inputPass.placeholder = 'Ingrese su contraseña';

  title.textContent = 'Login';
  buttonAccess.textContent = 'Ingresar';

  buttonReturn.textContent = 'Volver a página principal';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonAccess);
  section.append(title, form, buttonReturn);

  return section;
}

export default login;