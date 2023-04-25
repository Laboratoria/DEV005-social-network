/*import { signUpForm } from '../lib/auth';*/

function registro(navigateTo) {
  const section = document.createElement('section');
  section.class = 'formulario';

  /* Elementos */
  const form1 = document.createElement('div');
  form1.classList.add('register');

  const title = document.createElement('h2');
  title.classList.add('petregister');

  const img = document.createElement('img');
  img.id = 'imagen';
  img.src = '../Img/logo.jpg';

  const nameLabel = document.createElement('label');
  const name = document.createElement('input');
  nameLabel.textContent = 'Name:';
  nameLabel.setAttribute('for', 'name');
  name.id = 'name';
  name.placeholder = 'Write your name';

  const lastnameLabel = document.createElement('label');
  const lastname = document.createElement('input');
  lastnameLabel.textContent = 'Last Name:';
  lastnameLabel.setAttribute('for', 'lastname');
  lastname.id = 'lastname';
  lastname.placeholder = 'Write your last name';

  const passwordLabel = document.createElement('label');
  const password = document.createElement('input');
  passwordLabel.textContent = 'Password:';
  passwordLabel.setAttribute('for', 'password');
  password.id = 'password';
  password.placeholder = 'Enter a password';

  const mailLabel = document.createElement('label');
  const mail = document.createElement('input');
  mailLabel.textContent = 'Email:';
  mailLabel.setAttribute('for', 'mail');
  mail.id = 'mail';
  mail.placeholder = 'Write your email';

  const addressLabel = document.createElement('label');
  const address = document.createElement('input');
  addressLabel.textContent = 'City:';
  addressLabel.setAttribute('for', 'address');
  address.id = 'address';
  address.placeholder = 'Write your city';

  const birthdayLabel = document.createElement('label');
  const birthday = document.createElement('input');
  birthdayLabel.textContent = 'Birthday:';
  birthdayLabel.setAttribute('for', 'birthday');
  birthday.id = 'birthday';
  birthday.type = 'date';
  birthday.placeholder = 'Write your birthday';

  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Regresar';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const register = document.createElement('button');
  register.id = 'regist';
  register.textContent = 'Registrarse';
  /*register.addEventListener('click', () => {
    // Agregar un manejador de eventos para el botón de registro
    signUpForm(); // Llamar la función registrationForm
    console.log('si sirvo');
  });*/

  title.textContent = 'Pet Registro';

  section.append(img, form1);
  form1.append(
    title,
    nameLabel,
    name,
    lastnameLabel,
    lastname,
    passwordLabel,
    password,
    mailLabel,
    mail,
    addressLabel,
    address,
    birthdayLabel,
    birthday,
    register,
    buttonReturn,
  );
  return section;
}

export default registro;
