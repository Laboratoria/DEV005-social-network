import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const signupApp = (email, password, registerError) => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
    })
    .catch((error) => {
      password.value = '';
      // Posibles errores de registro
      if (error.code === 'auth/wrong-password') {
        registerError.textContent = 'Contraseña incorrecta';
      } else if (error.code === 'auth/email-already-in-use') {
        registerError.textContent = 'El correo ya está en uso';
      } else if (error.code === 'auth/invalid-email') {
        registerError.textContent = 'Correo inválido';
      } else if (error.code === 'auth/too-many-requests') {
        registerError.textContent = 'Demasiados intentos';
      } else if (error.code === 'auth/missing-password') {
        registerError.textContent = 'Ingrese una contraseña';
      } else if (error.code === 'auth/weak-password') {
        registerError.textContent = 'Contraseña muy débil';
      } else if (error.code === 'auth/missing-email') {
        registerError.textContent = 'Ingresa un correo';
      } else {
        registerError.textContent = 'Ingresa los datos requeridos';
      }
    });
};
