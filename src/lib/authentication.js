import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const loginApp = (email, password, loginError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('entro la persona ', user);
    // ...
    })
    .catch((error) => {
      loginError.textContent = 'Correo o contraseña incorrecto';
    });
};
