import { handleLoginEmail } from './auth.js';

const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  handleLoginEmail();
});

// Mostrar o esconder labels
const inputs = document.querySelectorAll('.inp-login');

inputs.forEach((input) => {
  const label = document.querySelector(`label[for="${input.id}"]`);

  input.addEventListener('click', () => {
    label.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
});
