import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

// TODO: Función de registro de usuario y contraseña.
// ? se borro el async
const registerConfig = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
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
        alert('correo inválido');
      } else if (error.code === 'auth/weak-password') {
        alert('contraseña muy corta');
      } else {
        alert('otro problema');
      }
      return error;
    });
};

export default registerConfig;
