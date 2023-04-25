/* eslint-disable no-console */
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { addPostToFirestore } from '../lib/post';

function wall(navigateTo) {
  const sectionWall = document.createElement('section');
  sectionWall.id = 'wall-section';
  const navBar = document.createElement('nav');
  navBar.id = 'nav-bar';
  const btnLogOut = document.createElement('button');
  btnLogOut.id = 'log-out';
  btnLogOut.textContent = 'Cerrar Sesión';
  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = '¡Bienvenida a KittyBook!';
  const msg = document.createElement('p');
  msg.textContent = 'Este sitio está en construcción. Esperamos verte pronto';
  const post = document.createElement('textarea');
  post.id = 'textPosts';
  const btnPost = document.createElement('button');
  btnPost.id = 'btn-posts';
  btnPost.type = 'submit';
  btnPost.textContent = 'Publicar';
  btnPost.disabled = true;

  btnPost.addEventListener('click', () => {
    const postText = post.value;
    console.log('algopost');
    addPostToFirestore(postText);
    /*
    if (postText === '') {
      btnPost.setAttribute('disabled', true); // Set disabled attribute
    } else {
      btnPost.removeAttribute('disabled'); // Remove disabled attribute
    }
    */
  });
  // // const msg = document.createElement('p');
  // msg.textContent = 'Este sitio está en construcción. Esperamos verte pronto';

  // const kittyImage = document.createElement('img');
  // kittyImage.src = '/images/working-cat.png';
  // kittyImage.alt = 'Working kitty';
  // kittyImage.width = 350;
  // kittyImage.height = 270;

  const btnReturnH = document.createElement('button');
  btnReturnH.className = 'return';
  btnReturnH.textContent = 'Volver a inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  btnLogOut.addEventListener('click', () => {
    signOut(auth);
    console.log('Clickaste cerrar sesión');
  });

  navBar.append(btnLogOut);
  sectionWall.append(
    navBar,
    welcomeMsg,
    post,
    btnPost,
  );

  return sectionWall;
}

export default wall;
