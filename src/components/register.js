import { newAccount, registerWithGoogle } from '../lib/auth';

function register(navigateTo) {
  const sectionReg = document.createElement('section');
  sectionReg.id = 'reg-account';
  sectionReg.classList.add('register-background');
  const titleReg = document.createElement('h2');
  const inputEmail = document.createElement('input');
  inputEmail.id = 'email';
  inputEmail.placeholder = 'Escribe tu correo';
  // const inputName = document.createElement('input');
  // inputName.id = 'full-name';
  // inputName.placeholder = 'Nombre completo';
  // const inputUser = document.createElement('input');
  // inputUser.id = 'nombre-usuario';
  // inputUser.placeholder = 'Tu usuario';
  const inputPass = document.createElement('input');
  inputPass.id = 'contraseña';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type ="password";
  // const inputConfirmPass = document.createElement('input');
  // inputConfirmPass.id = 'confirmar-contra';
  // inputConfirmPass.placeholder = 'Confirma tu contraseña';
  const btnSend = document.createElement('button');
  btnSend.id = 'enviar-info';
  const btnRegWithGoogle = document.createElement('button');
  btnRegWithGoogle.classList.add('google-reg-btn');

  titleReg.textContent = '¡Regístrate!';
  btnSend.textContent = 'Registrarme';
  btnRegWithGoogle.textContent = 'Regístrate con Google';

  const btnReturnH = document.createElement('button');
  btnReturnH.textContent = 'Return to home';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  btnSend.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    newAccount(email, password);
  });

  btnRegWithGoogle.addEventListener('click', registerWithGoogle);

  sectionReg.append(
    titleReg,
    inputEmail,
    // inputName,
    // inputUser,
    inputPass,
    // inputConfirmPass,
    btnRegWithGoogle,
    btnSend,
    btnReturnH,
  );
  newAccount('example1@mail.com', '123456');
  return sectionReg;
}

export default register;
