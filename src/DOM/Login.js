import { LoginTemplate } from '../templates/loginTemplate.js';

export const Login = () => {
  const div = document.createElement('div');
  /* div.className = 'Login';
  div.id = 'login'; */
  div.innerHTML = LoginTemplate;

  const register = div.querySelector('#linkRegister');

  register.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.pathname = '/registrate';
  });

  return div;
};
