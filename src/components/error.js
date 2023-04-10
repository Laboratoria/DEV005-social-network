function error(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  title.textContent = 'Error 404, page not found. Please go home.';
  button.textContent = 'Return to home';
  button.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, button);

  return section;
}

export default error;
