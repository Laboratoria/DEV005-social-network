// Este es el punto de entrada de tu aplicacion

// import { initializeApp } from "../node_modules/firebase/app";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

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
