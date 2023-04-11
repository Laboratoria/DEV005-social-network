function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const button2 = document.createElement('button');

  button.textContent = 'login';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  button2.textContent = 'muro';
  button2.addEventListener('click', () => {
    navigateTo('/muro');
  });

  title.textContent = 'Welcome to my social Network';

  section.append(title, button, button2);
  return section;
}

export default home;
