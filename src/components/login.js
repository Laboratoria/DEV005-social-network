function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const buttonStart = document.createElement('button');
  buttonStart.textContent = 'Iniciar sesión';
  title.textContent = 'Inicia Sesion';
  section.append(title, buttonStart);
  buttonStart.addEventListener('click', () => { navigateTo('/register'); });
  return section;
}

export default login;
