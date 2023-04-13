import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const loginApp = (email, password, loginError) => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      // console.log(userCredential.user);
    })
    .catch(() => {
      // console.log(error);
      password.value = '';
      loginError.textContent = 'Correo o contraseña incorrecto';
    });
};
