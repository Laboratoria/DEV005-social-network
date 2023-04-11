function home(navigateTo) {
  const title = document.createElement('h1');
  const section = document.createElement('section');
  const btnLogIn = document.createElement('button');
  btnLogIn.id = 'log-in';
  const btnRegister = document.createElement('button');
  btnRegister.id = 'register';

  title.textContent = '¡Bienvenida a KittyBook!';
  btnLogIn.textContent = 'Iniciar sesión';
  btnRegister.textContent = 'Registrarme';
  btnLogIn.addEventListener('click', () => {
    navigateTo('/login');
  });
  btnRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  section.append(btnLogIn, btnRegister);
  return section;
}

export default home;