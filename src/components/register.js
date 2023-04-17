import { newAccount, registerWithGoogle } from '../lib/auth';

function register(navigateTo) {
  const sectionReg = document.createElement('section');
  sectionReg.id = 'reg-account';
  sectionReg.classList.add('register-background');

  const divContainer = document.createElement('div');
  const titleRegKitty = document.createElement('h1');
  const titleReg = document.createElement('h3');
  const inputEmail = document.createElement('input');
  const image = document.createElement('img');
  const regTrademark = document.createElement('footer');
  divContainer.id = 'container';
  image.id = 'imagen';
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
  inputPass.id = 'password';
  inputPass.type = 'password';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type = 'password';
  // const inputConfirmPass = document.createElement('input');
  // inputConfirmPass.id = 'confirmar-contra';
  // inputConfirmPass.placeholder = 'Confirma tu contraseña';
  const btnSend = document.createElement('button');
<<<<<<< HEAD
  btnSend.id = 'send-info';
=======
  btnSend.id = 'enviar-info';
  const btnRegWithGoogle = document.createElement('button');
  btnRegWithGoogle.classList.add('google-reg-btn');
>>>>>>> main


  titleRegKitty.textContent = 'KittyBook';
  titleReg.textContent = '¡Regístrate!';
  btnSend.textContent = 'Registrarme';
  btnRegWithGoogle.textContent = 'Regístrate con Google';
  regTrademark.textContent = 'KittyBook, 2023'

  const btnReturnH = document.createElement('button');
<<<<<<< HEAD
  btnReturnH.textContent = 'Volver a inicio';
=======
  btnReturnH.id = 'return';
  btnReturnH.textContent = 'Volver al Inicio';
>>>>>>> main
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  btnSend.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    if (email === '' || password === '') {
    alert("Ingrese usuario y/o contraseña");
    }else {
      alert("¡Registro exitoso, muchas gracias!");
    newAccount(email, password);
    }
  });

  btnRegWithGoogle.addEventListener('click', registerWithGoogle);


  divContainer.append(
    inputEmail,
    inputPass,
    btnSend,
    btnReturnH,
    )
  sectionReg.append(
    titleRegKitty,
    titleReg,
    divContainer,
    image,
    // inputName,
    // inputUser,
    // inputConfirmPass,
    btnRegWithGoogle,
    regTrademark,
  );
  newAccount('example1@mail.com', '123456');
  return sectionReg;
}

export default register;
