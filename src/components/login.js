function Login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Write email';
  inputPass.placeholder = 'pass';

  title.textContent = 'Login';
  buttonLogin.textContent = 'login';

  buttonReturn.textContent = 'back to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, inputEmail, inputPass, buttonLogin, buttonReturn);

  return section;
}

export default Login;
