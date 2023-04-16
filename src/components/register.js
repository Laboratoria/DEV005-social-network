function register() {
  const root = document.getElementById('root');
  // Creación de containerRight
  const containerRight = document.createElement('section');
  containerRight.classList.add('containerRight');
  const titleRegister = document.createElement('span');
  titleRegister.classList.add('titleRegister');
  titleRegister.textContent = 'Registrarse';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Guardar y crear';

  // Creación de containerLeft
  const containerLeft = document.createElement('section');
  containerLeft.classList.add('containerLeft');
  const contentPhrase = document.createElement('span');
  contentPhrase.classList.add('contentPhrase');
  contentPhrase.textContent = 'Porque aún hay mucho más por contar y compartir';
  const divTitleLogo = document.createElement('div');
  divTitleLogo.classList.add('divTitleLogo');
  const titleLogo = document.createElement('span');
  titleLogo.textContent = 'Senior Face';
  divTitleLogo.append(titleLogo);
  // Creación de contenedor de input

  const divContent = document.createElement('div');
  divContent.classList.add('divContent');

  // Creación de input para insertar nombre

  const divInputName = document.createElement('div');
  divInputName.classList.add('divInput');
  const spanInsertName = document.createElement('span');
  spanInsertName.textContent = 'INGRESAR NOMBRE';
  const inputInsertName = document.createElement('input');
  divInputName.append(spanInsertName, inputInsertName);

  // Creación de input para insertar correo
  const divInputCorreo = document.createElement('div');
  divInputCorreo.classList.add('divInput');
  const spanInsertCorreo = document.createElement('span');
  spanInsertCorreo.textContent = 'INGRESAR CORREO';
  const inputInsertCorreo = document.createElement('input');
  divInputCorreo.append(spanInsertCorreo, inputInsertCorreo);

  // Creación de input para insertar contraseña

  const divInputPassword = document.createElement('div');
  divInputPassword.classList.add('divInput');
  const spanInsertPassword = document.createElement('span');
  spanInsertPassword.textContent = 'INGRESAR CONTRASEÑA';
  const inputInsertPassword = document.createElement('input');
  divInputPassword.append(spanInsertPassword, inputInsertPassword);

  // Creación de input para insertar contraseña nuevamente
  const divInputAgainPassword = document.createElement('div');
  divInputAgainPassword.classList.add('divInput');
  const spanInsertAgainPassword = document.createElement('span');
  spanInsertAgainPassword.textContent = 'INGRESE OTRA VEZ SU CONTRASEÑA';
  const inputInsertAgainPassword = document.createElement('input');
  divInputAgainPassword.append(spanInsertAgainPassword, inputInsertAgainPassword);

  divContent.append(
    divInputName,
    divInputCorreo,
    divInputPassword,
    divInputAgainPassword,
    buttonRegister,
  );
  // ContainerRight
  containerRight.append(titleRegister, divContent);
  // ContainerLeft
  containerLeft.append(contentPhrase, divTitleLogo);

  root.append(containerLeft, containerRight);

  return root;
}

export default register;
