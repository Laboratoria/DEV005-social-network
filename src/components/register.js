import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';

const register = (navigateTo) => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'registerDiv';
  const imgRegister = document.createElement('div');
  imgRegister.className = 'imgRegister';
  const menssageRegisterRouter = document.createElement('h2');
  menssageRegisterRouter.className = 'menssageRegisterRouter';

  const infoRegister = document.createElement('form');
  infoRegister.className = 'infoRegister';
  infoRegister.id = 'infoRegister';

  const emailRegister = document.createElement('input');
  emailRegister.className = 'emailRegister';
  emailRegister.type = 'email';
  emailRegister.id = 'emailRegister';
  const passwordRegister = document.createElement('input');
  passwordRegister.className = 'passwordRegister';
  passwordRegister.type = 'password';
  passwordRegister.id = 'passwordRegister';
  const checkPasswordRegister = document.createElement('input');
  checkPasswordRegister.className = 'checkPasswordRegister';
  checkPasswordRegister.type = 'password';
  checkPasswordRegister.id = 'checkPasswordRegister';
  const buttonSaveInformation = document.createElement('button');
  buttonSaveInformation.className = 'buttonSaveInformation';
  buttonSaveInformation.type = 'submit';

  /* uttonSaveInformation.addEventListener('click', () => {
    navigateTo('/login');
  }); */

  buttonSaveInformation.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('emailRegister');
    const password = document.getElementById('passwordRegister');
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value,
      );
      console.log(userCredential);
      navigateTo('/login');
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
    }
  });

  const iconEmail = document.createElement('div');
  iconEmail.className = 'iconEmail1';
  const iconPassword = document.createElement('div');
  iconPassword.className = 'iconPassword';
  //
  menssageRegisterRouter.textContent = 'Regístrate';
  emailRegister.placeholder = 'Iniciar sesión';
  passwordRegister.placeholder = 'Contraseña';
  checkPasswordRegister.placeholder = 'Repetir contraseña';
  buttonSaveInformation.textContent = 'Guardar';

  registerDiv.append(
    imgRegister,
    menssageRegisterRouter,
    infoRegister,
    buttonSaveInformation,
  );
  infoRegister.append(emailRegister, passwordRegister, checkPasswordRegister);
  emailRegister.appendChild(iconEmail);
  passwordRegister.appendChild(iconPassword);
  checkPasswordRegister.appendChild(iconPassword);

  return registerDiv;
};

export default register;
