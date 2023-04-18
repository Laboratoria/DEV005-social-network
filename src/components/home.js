function home(navigateTo) {
  const homediv = document.createElement('div');
  homediv.className = 'homediv';
  const imghome = document.createElement('div');
  imghome.className = 'imghome';

  const messagehome = document.createElement('h1');
  messagehome.className = 'messagehome';
  const buttondiv = document.createElement('div');
  buttondiv.className = 'buttondiv';
  // ? botón de email
  const buttonemail = document.createElement('button');
  buttonemail.className = 'buttonemail';
  const iconemail = document.createElement('div');
  iconemail.className = 'iconemail';
  // ? botón de google
  const buttongoogle = document.createElement('button');
  buttongoogle.className = 'buttongoogle';
  const icongoogle = document.createElement('div');
  icongoogle.className = 'icongoogle';
  // ? botón de twitter
  const buttontwitter = document.createElement('button');
  buttontwitter.className = 'buttontwitter';
  const icontwitter = document.createElement('div');
  icontwitter.className = 'icontwitter';
  // ? botón de github
  const buttongithub = document.createElement('button');
  buttongithub.className = 'buttongithub';
  const icongithub = document.createElement('div');
  icongithub.className = 'icongithub';
  // ? mensaje
  const registrarAhora = document.createElement('span');
  registrarAhora.className = 'registrarAhora';

  buttonemail.textContent = 'Continuar con Email';
  buttonemail.addEventListener('click', () => {
    navigateTo('/login');
  });
  registrarAhora.addEventListener('click', () => {
    navigateTo('/register');
  });

  buttongoogle.textContent = 'Continuar con Google';
  buttontwitter.textContent = 'Continuar con Twitter';
  buttongithub.textContent = 'Continuar con Github';
  registrarAhora.innerHTML = ` ¿No tienes una cuenta?
  <strong>Regístrate ahora</strong>`;
  messagehome.textContent = 'Bienvenido a Food Match';

  homediv.append(imghome, messagehome, buttondiv, registrarAhora);
  buttondiv.append(buttonemail, buttongoogle, buttontwitter, buttongithub);
  buttonemail.appendChild(iconemail);
  buttongoogle.appendChild(icongoogle);
  buttontwitter.appendChild(icontwitter);
  buttongithub.appendChild(icongithub);
  return homediv;
}

export default home;
