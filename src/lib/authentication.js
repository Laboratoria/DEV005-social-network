import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

import { firebaseApp } from './firebase.js';

const auth = getAuth(firebaseApp);
export const loginApp = (email, password, loginError) => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
    })
    .catch((error) => {
      password.value = '';
      // Posibles errores de autenticación
      if (error.code === 'auth/wrong-password') {
        loginError.textContent = 'Contraseña incorrecta';
      } else if (error.code === 'auth/user-not-found') {
        loginError.textContent = 'El usuario no existe';
      } else if (error.code === 'auth/invalid-email') {
        loginError.textContent = 'Correo inválido';
      } else if (error.code === 'auth/too-many-requests') {
        loginError.textContent = 'Demasiados intentos';
      } else if (error.code === 'auth/missing-password') {
        loginError.textContent = 'Ingrese una contraseña';
      } else {
        loginError.textContent = 'Ingresa los datos requeridos';
      }
    });
};
