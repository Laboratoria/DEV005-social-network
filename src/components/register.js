import { newAccount } from '../lib/auth';

function register(navigateTo) {
  const sectionReg = document.createElement('section');
  sectionReg.id = 'reg-account';
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
  // const inputConfirmPass = document.createElement('input');
  // inputConfirmPass.id = 'confirmar-contra';
  // inputConfirmPass.placeholder = 'Confirma tu contraseña';
  const btnSend = document.createElement('button');
  btnSend.id = 'enviar-info';

  titleReg.textContent = '¡Regístrate!';
  btnSend.textContent = 'Registrarme';

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

  sectionReg.append(
    titleReg,
    inputEmail,
    // inputName,
    // inputUser,
    inputPass,
    // inputConfirmPass,
    btnSend,
    btnReturnH,
  );
  newAccount('example1@mail.com', '123456');
  return sectionReg;
}

export default register;
