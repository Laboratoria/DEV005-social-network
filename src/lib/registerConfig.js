import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const registerConfig = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value,
    );
    return userCredential;
  })
    .catch((error) => {
      console.log(error.message);
      console.log(error.code);

      if (error.code === 'auth/email-already-in-user') {
        alert('correo en uso');
      } else if (error.code === 'auth/invalid-email') {
        alert('correo invalido');
      } else if (error.code === 'auth/weak-password') {
        alert('contraseña muy corta');
      } else {
        alert('otro problema');
      }
      return error;
    });
};

export default registerConfig;
