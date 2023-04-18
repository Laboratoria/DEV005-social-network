function register() {
  const section = document.createElement('section');
  section.classList.add('sectionInput');
  const containerRight = document.createElement('div');
  containerRight.classList.add('containerRight');
  const containerLeft = document.createElement('div');
  containerLeft.classList.add('containerLeft');
  const title = document.createElement('h1');

  title.textContent = 'Registrate pe';
  section.append(title);

  title.classList.add('titleLogo');
  title.textContent = 'Resgistrarse';

  // Creación de contenedor de input

  const divContent = document.createElement('div');
  divContent.classList.add('divContent');

  // Creación de input para insertar nombre

  const divInputName = document.createElement('div');
  divInputName.classList.add('divInput');
  const spanInsertName = document.createElement('span');
  spanInsertName.textContent = 'Ingresar nombre';
  const inputInsertName = document.createElement('input');
  divInputName.append(spanInsertName, inputInsertName);

  // Creación de input para insertar correo
  const divInputCorreo = document.createElement('div');
  divInputCorreo.classList.add('divInput');
  const spanInsertCorreo = document.createElement('span');
  spanInsertCorreo.textContent = 'Ingresar correo';
  const inputInsertCorreo = document.createElement('input');
  divInputCorreo.append(spanInsertCorreo, inputInsertCorreo);

  // Creación de input para insertar contraseña

  const divInputPassword = document.createElement('div');
  divInputPassword.classList.add('divInput');
  const spanInsertPassword = document.createElement('span');
  spanInsertPassword.textContent = 'Ingrese su contraseña';
  const inputInsertPassword = document.createElement('input');
  divInputPassword.append(spanInsertPassword, inputInsertPassword);

  // Creación de input para insertar contraseña nuevamente
  const divInputAgainPassword = document.createElement('div');
  divInputAgainPassword.classList.add('divInput');
  const spanInsertAgainPassword = document.createElement('span');
  spanInsertPassword.textContent = 'Ingrese otra vez su contraseña';
  const inputInsertAgainPassword = document.createElement('input');
  divInputAgainPassword.append(spanInsertAgainPassword, inputInsertAgainPassword);

  divContent.append(divInputName, divInputCorreo, divInputPassword, divInputAgainPassword);
  containerRight.append(title, divContent);
  section.append(containerLeft, containerRight);

  return section;
}

export default register;
