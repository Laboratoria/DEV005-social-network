import { signupApp } from './register.js';

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

// Define una función manejadora para el evento de envío de formulario de registro
export const signupFormSubmit = (inputEmail, inputPassword, registerError) => {
  const handleSignupFormSubmit = (event) => {
    event.preventDefault();
    signupApp(inputEmail.value, inputPassword.value, registerError);
    inputPassword.value = '';
  }; return handleSignupFormSubmit;
};

// Navegar hacia inicio de sesión
export const navigateToLogin = (navigateTo) => {
  const preventRefresh = (event) => {
    event.preventDefault();
    navigateTo('/login');
  }; return preventRefresh;
};
