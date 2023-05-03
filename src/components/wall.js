import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { addPostToFirestore, deleteFirestorePost } from '../lib/post';

function wall() {
  const wallSection = document.createElement('section');
  wallSection.id = 'wall-section';
  const navBar = document.createElement('nav');
  navBar.id = 'nav-bar';
  const btnLogOut = document.createElement('button');
  btnLogOut.id = 'log-out';
  btnLogOut.textContent = 'Cerrar sesión';

  // Posts
  const nameApp = document.createElement('h3');
  nameApp.id = 'name-App';
  nameApp.textContent = 'KittyBook';
  const writeContainer = document.createElement('section');
  writeContainer.id = 'write-container';
  const post = document.createElement('textarea');
  post.id = 'text-posts';
  post.placeholder = '...';
  const btnPost = document.createElement('button');
  btnPost.id = 'btn-posts';
  btnPost.type = 'submit';
  btnPost.textContent = 'Publicar';
  // btnPost.disabled = true;

  // Visualización de los posts
  const postsContainer = document.createElement('section');
  postsContainer.id = 'posts-container';

  // Deshabilitar btnPost hasta que haya algo escrito
  post.addEventListener('keyup', () => {
    if (post.value !== '') {
      btnPost.disabled = false;
    } else if (post.value.length >= 2) {
      btnPost.disabled = false;
    } else {
      btnPost.disabled = true;
    }
  });

  btnPost.addEventListener('click', () => {
    const postText = post.value;
    const newPost = document.createElement('div');
    newPost.className = 'posted';
    newPost.textContent = postText;
    postsContainer.append(newPost);
    console.log(postText);
    // addPostToFirestore(postText);
    post.value = '';
    btnPost.disabled = true;

    const btnsContainer = document.createElement('div');
    btnsContainer.id = 'btns-cont';
    // Creación botón Editar
    const bntEdit = document.createElement('button');
    bntEdit.id = 'btn-edit';
    bntEdit.textContent = 'Editar';
    // Creación botón Eliminar
    const btnDelete = document.createElement('button');
    btnDelete.id = 'btn-delete';
    btnDelete.textContent = 'Borrar';

    // Función botón borrar post
    btnDelete.addEventListener('click', () => {
      // deleteFirestorePost(postsContainer);
      console.log('Se borró la publicación');
    });

    // Función para editar post
    bntEdit.addEventListener('click', () => {
      const postId = newPost.id;
    });

    btnsContainer.append(bntEdit, btnDelete);
    newPost.append(btnsContainer);
  });

  btnLogOut.addEventListener('click', () => {
    signOut(auth);
    console.log('Se cerró sesión correctamente');
  });

  // Orden provisorio que le dejé al append
  navBar.append(nameApp, btnLogOut);
  writeContainer.append(post, btnPost);
  wallSection.append(
    navBar,
    writeContainer,
    postsContainer,
  );

  return wallSection;
}

export default wall;
