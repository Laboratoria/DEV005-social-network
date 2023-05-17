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
  const callback = (isLogged) => {
      onSessionActive(isLogged);
      if (isLogged) {
        navigateTo('/');
      }
    }
  validateSession(callback);
}

export { validarRutaHome, validarRutaLogin };
