import { newAccount, accessWithGoogle} from '../lib/auth';

function register(navigateTo) {
  const sectionReg = document.createElement('section');
  sectionReg.id = 'reg-account';
  sectionReg.classList.add('register-background');
  const divContainer = document.createElement('div');
  const titleRegKitty = document.createElement('h1');
  const titleReg = document.createElement('h3');
  const inputEmail = document.createElement('input');
  const regTrademark = document.createElement('footer');
  divContainer.id = 'container';
  regTrademark.id = 'marca';
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
  inputPass.type = 'password';
  // const inputConfirmPass = document.createElement('input');
  // inputConfirmPass.id = 'confirmar-contra';
  // inputConfirmPass.placeholder = 'Confirma tu contraseña';
  const btnSend = document.createElement('button');
  btnSend.id = 'send-info';
  btnSend.type = 'submit';
  const btnRegWithGoogle = document.createElement('button');
  btnRegWithGoogle.classList.add('google-reg-btn');

  titleRegKitty.textContent = 'KittyBook';
  titleReg.textContent = '¡Regístrate!';
  btnSend.textContent = 'Registrarme';
  btnRegWithGoogle.textContent = 'Regístrate con Google';
  regTrademark.textContent = 'KittyBook, 2023';

  const btnReturnH = document.createElement('button');
  btnReturnH.id = 'return';
  btnReturnH.textContent = 'Volver al Inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });
  btnSend.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    if (email === '' || password === '') {
      alert('Ingrese usuario y/o contraseña');
    } else {
      alert('¡Registro exitoso, muchas gracias!');
      newAccount(email, password);
    }
  });

  btnRegWithGoogle.addEventListener('click', () => {
    accessWithGoogle(navigateTo);
  });

  divContainer.append(
    inputEmail,
    inputPass,
    btnSend,
  );
  sectionReg.append(
    titleRegKitty,
    titleReg,
    divContainer,
    // inputName,
    // inputUser,
    // inputConfirmPass,
    btnRegWithGoogle,
    btnReturnH,
    regTrademark,
  );
  newAccount('example1@mail.com', '123456');
  return sectionReg;
}
export default register;
