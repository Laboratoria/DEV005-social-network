/* eslint-disable no-console */
function logIn(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  button.textContent = 'Return to home';
  button.addEventListener('click', () => {
    navigateTo('/');
    console.log(button);
  });
  title.textContent = 'Log In';

  section.append(title, button);
  console.log(section);
  return section;
}

export default logIn;
