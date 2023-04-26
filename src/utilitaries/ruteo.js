import { validateSession } from '../lib/auth';

function validarRutaHome(navigateTo, onSessionActive) {
  validateSession((isLogged) => {
    onSessionActive(isLogged);
    if (!isLogged) {
      navigateTo('/login');
    }
  });
}

function validarRutaLogin(navigateTo, onSessionActive) {
  validateSession((isLogged) => {
    onSessionActive(isLogged);
    if (isLogged) {
      navigateTo('/');
    }
  });
}

export { validarRutaHome, validarRutaLogin };
