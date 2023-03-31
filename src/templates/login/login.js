
// import { myFunction } from './lib/index.js';

// myFunction();

// Función de efecto input
export const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.onfocus = () => {
    input.previousElementSibling.classList.add('top');
    input.previousElementSibling.classList.add('focus');
    input.parentNode.classList.add('focus');
  };
  input.onblur = () => {
    input.value = input.value.trim();
    // eslint-disable-next-line eqeqeq
    if (input.value.trim().length == 0) {
      input.previousElementSibling.classList.remove('top');
    }

    input.previousElementSibling.classList.remove('focus');
    input.parentNode.classList.remove('focus');
  };
});

const btn = document.getElementById('btnRegistro');
btn.addEventListener('click', () => {
  window.location.pathname = '/registro';
});

export const txtCorreo = document.querySelector('#correo');
export const txtClave = document.querySelector('#clave');

export const btnInicio = document.querySelector('#btnInicio');
export const btnRegistro = document.querySelector('#btnRegistro');