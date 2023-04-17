function error(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('error-section');
  const title = document.createElement('h1');
  title.classList.add('error-title');
  const errorNum = document.createElement('h3');
  errorNum.id = 'error-num';
  const notFound = document.createElement('h3');
  notFound.id = 'not-found';
  const blackKitty = document.createElement('p');
  blackKitty.id = 'black-kitty';
  const button = document.createElement('button');
  button.classList.add('go-home-error');
  title.textContent = 'Oops!';
  errorNum.textContent = 'Error 404';
  notFound.textContent = 'Page not found';
  blackKitty.textContent = '(Unless you were looking for a cute little black kitty)';
  button.textContent = 'Go home';
  button.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, button, errorNum, notFound, blackKitty);

  return section;
}

export default error;
