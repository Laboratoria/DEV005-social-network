// Importa las dependencias necesarias
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase.js';

const provider = new GoogleAuthProvider();

// Define la función signinGoogle
export const signInGoogle = () => {
  // Iniciar el proceso de autenticación con redirección de Google
  signInWithRedirect(auth, provider)
    .then(() => {
    })
    .catch(() => {
    });
};
