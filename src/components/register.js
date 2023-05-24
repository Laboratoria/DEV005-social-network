import { signInNewAccount } from '../lib/auth.js';
import { registerTemplate } from '../template/register-template.js';

function reguistro(navigateTo) {
  const registerContainer = document.createElement('div');
  registerContainer.classList.add('registerContainer');
  registerContainer.innerHTML = registerTemplate;// Inserta el template de templates/login.js

  const form = document.createElement('form');
  form.className = 'fomRegister';
  const email = registerContainer.querySelector('#email');

  const password = registerContainer.querySelector('#password');
  const confirPassword = registerContainer.querySelector('#password-reconfirmacion');
  const loginCorreoBtn = registerContainer.querySelector('#loginBtn');
  form.append(email, password, confirPassword, loginCorreoBtn);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const onFinishRegister = (isSuccess) => {
      if (isSuccess === true) {
        navigateTo('/welcome');
      }
    };
    signInNewAccount(email.value, password.value, onFinishRegister);
  });
  registerContainer.append(form);

  return registerContainer;
}
export default reguistro;
