function registro(navigateTo) {
  const section = document.createElement('section');
  section.id = 'formulario';
  /* Elementos */
  const title = document.createElement('h2');

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

  const register = document.createElement('button');
  register.textContent = 'Registrarse';

  title.textContent = 'Pet Registro';

  section.append(
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
    img,
  );
  return section;
}

export default registro;
