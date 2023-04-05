function init(navigateTo) {
  const section = document.createElement('section');
  const logIn = document.createElement('button');
  logIn.className = 'logIn';
  const register = document.createElement('button');
  register.className = 'register';
  const google = document.createElement('button');
  google.className = 'google';
  const gitHub = document.createElement('button');
  gitHub.className = 'gitHub';

  logIn.textContent = 'Inicia Sesión';
  register.textContent = 'Registrate';
  google.textContent = 'Registrate con Google';
  gitHub.textContent = 'Registrate con GitHub';

  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  section.append(logIn, register, google, gitHub);
  return section;
}

function login() {
  const section = document.createElement('section');
  const interaction = document.createElement('section');
  interaction.className = 'interaction';
  const initSection = document.createElement('h2');
  initSection.className = 'initSection';
  const textButton = document.createElement('label');
  textButton.className = 'textButton';
  const card1 = document.createElement('input');
  card1.className = 'card1';
  const textPassword = document.createElement('label');
  textPassword.className = 'textPassword';
  const card2 = document.createElement('input');
  card2.className = 'card2';
  const getInt = document.createElement('button');
  getInt.className = 'getInt';
  const bottomText = document.createElement('button');
  bottomText.className = 'bottomText';

  initSection.textContent = 'Inicio de Sesión';
  textButton.textContent = 'Correo Electronico';
  textButton.appendChild(card1);
  card1.placeholder = 'ejemplo@gmail.com';
  textPassword.textContent = 'Contraseña';
  textPassword.appendChild(card2);
  card2.placeholder = '********';
  getInt.textContent = 'Ingresar';
  bottomText.textContent = '¿No tienes una cuenta? Regístrate';

  interaction.append(textButton, card1, textPassword, card2, getInt);
  section.append(initSection, interaction, bottomText);
  return section;
}

export {
  init,
  login,
};
