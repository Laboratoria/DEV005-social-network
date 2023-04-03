import { RegisterTemplate } from '../templates/registerTemplate.js';

export const Register = () => {
  const div = document.createElement('div');
  div.innerHTML = RegisterTemplate;
  return div;
};
