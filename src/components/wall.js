import { logoutApp } from '../lib/logout.js';
import { savePost, onGetPost, deletePost } from '../lib/posting.js';

const deleteAPost = (postId) => {
  const handleDeletePost = (event) => {
    // Eliminar el post
    deletePost(postId);
    // Obtener el contenedor del post que se va a eliminar
    const containerEachPost = event.target.parentElement;
    // Eliminar el contenedor del post de la pantalla
    containerEachPost.remove();
  };
  return handleDeletePost;
};
const showPublics = async (containerPublic) => {
  onGetPost((querySnapshot) => {
    // Revisa cambios tipo "añadido" en los documentos y los muestra
    // Añade solo los elementos nuevos (evita que se dupliquen los post)
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const post = change.doc.data();
        const postId = change.doc.id;
        // Crea el contenedor de cada post
        const containerEachPost = document.createElement('div');
        containerEachPost.classList.add('container-each-post');
        // Inserta el texto
        const textEachPost = document.createElement('p');
        textEachPost.classList.add('text-each-post');
        textEachPost.textContent = post.text;
        // Botón para eliminar post
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.textContent = 'eliminar';
        btnDelete.addEventListener('click', deleteAPost(postId));

        containerEachPost.append(textEachPost, btnDelete);
        // Inserta en el contenedor de todos los posts
        containerPublic.append(containerEachPost);
      }
    });
  });
};

// Cerrar sesión
const navigateToLoginAfterLogout = (navigateTo) => {
  const callLogoutApp = (event) => {
    event.preventDefault();
    logoutApp(navigateTo);
  };
  return callLogoutApp;
};

const saveAPost = (textPost) => {
  const handleSavePost = (event) => {
    event.preventDefault();
    savePost(textPost);
  }; return handleSavePost;
};

function wall(navigateTo) {
  const containerPost = document.createElement('section');
  containerPost.classList.add('container-post');
  // Formulario de crear publicación
  const formPost = document.createElement('form');
  formPost.classList.add('form-post');

  const labelPost = document.createElement('label');
  labelPost.classList.add('label-post');
  labelPost.textContent = '¿Qué quieres compartir?';
  labelPost.setAttribute('for', 'text-post');

  const textPost = document.createElement('textarea');
  textPost.id = 'text-post';

  // Botón para publicar
  const btnPost = document.createElement('button');
  btnPost.classList.add('btn-Post');
  btnPost.textContent = 'Publicar';
  btnPost.type = 'submit';
  formPost.addEventListener('submit', saveAPost(textPost));

  formPost.append(labelPost, textPost, btnPost);

  // Contenedor donde van los post
  const containerPublic = document.createElement('div');
  containerPublic.classList.add('container-public');
  showPublics(containerPublic);
  // Botón para cerrar sesión
  const btnLogout = document.createElement('button');
  btnLogout.classList.add('btn-logout');
  btnLogout.textContent = 'cerrar sesión';
  btnLogout.addEventListener('click', navigateToLoginAfterLogout(navigateTo));

  containerPost.append(formPost, btnLogout, containerPublic);

  return containerPost;
}
export default wall;
