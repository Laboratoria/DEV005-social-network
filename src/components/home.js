// HOME

function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const button = document.createElement('button');

  button.textContent = 'Login';
  console.log(section)
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  title.textContent = 'Acceder';

  section.append(title, button);
  return section;
}

export default home;