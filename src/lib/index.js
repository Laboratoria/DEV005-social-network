import { loginApp } from './authentication.js';
// Movimiento de los labels
export function labelMovement(input, label) {
  input.addEventListener('click', () => {
    label.classList.add('active');
  });
  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
}

// Envío de formulario Login
// Define una función manejadora para el evento de envío de formulario de inicio de sesión
export const loginFormSubmit = (inputEmail, inputPassword, loginError) => {
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    loginApp(inputEmail.value, inputPassword.value, loginError);
    inputPassword.value = '';
  }; return handleLoginFormSubmit;
};
