import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const loginApp = (email, password, loginError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
    // Signed in
    // console.log('entro la persona ', user);
    })
    .catch(() => {
      loginError.textContent = 'Correo o contraseña incorrecto';
    });
};
