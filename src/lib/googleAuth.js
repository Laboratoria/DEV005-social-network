// Importa las dependencias necesarias
import { signInWithRedirect, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { firebaseApp } from './firebase.js';

const auth = getAuth(firebaseApp);

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
