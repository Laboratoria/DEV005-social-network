import { LoginTemplate } from '../templates/loginTemplate.js';

export const Login = (onNavigate) => {
  const div = document.createElement('div');
  /* div.className = 'Login';
  div.id = 'login'; */
  div.innerHTML = LoginTemplate;

  const register = div.querySelector('#linkRegister');

  register.addEventListener('click', () => {
    onNavigate('/registrate');
  });

  return div;
};
