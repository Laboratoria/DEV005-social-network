/* import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

const registerConfig = async (email, password) => {
  try {
    const credencialUsuario = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value,
    );
    return credencialUsuario;
  } catch (error) {
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
  }
};

export default registerConfig; */
