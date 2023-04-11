import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const loginApp = (email, password, loginError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
    })
    .catch(() => {
      loginError.textContent = 'Correo o contraseña incorrecto';
    });
};
