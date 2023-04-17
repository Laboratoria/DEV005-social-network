/* import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const registrarse = document.querySelector('.infoRegister');
console.log(registrarse);

registrarse.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = registrarse.emailregister.value;
  const password = registrarse.passwordregister.value;
  const passwordConf = registrarse.checkPasswordRegister.value;
  console.log(email, password, passwordConf);

  // para considerar los errores lo colocaremos dentro de un try catch

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}); */
