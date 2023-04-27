export function home() {
// Creación del body
  const bodyHome = document.createElement('body');

  // Creación del nav
  const navHome = document.createElement('nav');
  const titleHome = document.createElement('h1');
  titleHome.textContent = 'Senior Face';
  const divUserName = document.createElement('div');
  const userName = document.createElement('span');
  divUserName.append(userName);
  navHome.append(titleHome, userName);

  // Creación del main
  const mainHome = document.createElement('main');
  // Creación de Seccion para el usuario
  const sectionUser = document.createElement('section');
  const articleUser = document.createElement('article');
  const labelUser = document.createElement('label');
  const inputlUserPost = document.createElement('input');
  inputlUserPost.classList.add('inputUserPost');
  const buttonSendPost = document.createElement('button');
  buttonSendPost.textContent = 'Enviar';
  articleUser.append(labelUser, inputlUserPost, buttonSendPost);
  sectionUser.append(articleUser);

  // Creación de sección para post
  const sectionPost = document.createElement('section');
  const articlePost = document.createElement('article');
  sectionPost.append(articlePost);

  // Ingreso de elementos en mainHome

  mainHome.append(sectionUser, sectionPost);

  // Ingreso de elementos en bodyHome
  bodyHome.append(
    navHome,
    mainHome,
  );
  return bodyHome;
}
