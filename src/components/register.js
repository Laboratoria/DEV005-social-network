import { registerWithEmail } from '../lib/registerWithEmail.js';

function reguistro() {
  const section = document.createElement('section');
  const title = document.createElement('h2');

  title.textContent = 'reguistrado';
  const form = document.createElement('form');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'guardar';
  button.type = 'submit';
  email.placeholder = 'correo@correo.com';
  password.placeholder = '**';
  form.append(email, password, button);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    registerWithEmail(email.value, password.value);
  });
  section.append(title, form);
  return section;
}
export default reguistro;
