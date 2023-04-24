import { logoutApp } from '../lib/logout.js';
import {
  savePost, onGetPost, deletePost, getOnePost, editPost,
} from '../lib/posting.js';
import { auth } from '../lib/firebase.js';

let id = '';
let editStatus = false;
const deleteAPost = (postId) => {
  const handleDeletePost = (event) => {
    deletePost(postId);
    // Obtener el contenedor del post que se va a eliminar
    const containerEachPost = event.target.parentElement;
    // Eliminar el contenedor del post de la pantalla
    containerEachPost.remove();
  };
  return handleDeletePost;
};

// Editar una publicación
const editAPost = (postId) => {
  const handleEditAPost = async (event) => {
    event.preventDefault();
    // Obtener el contenido de la publicación seleccionada
    const doc = await getOnePost(postId);
    const post = doc.data();
    // Rellenar el campo de publicación
    const formText = document.querySelector('#text-post');
    formText.value = post.text;
    // Cambiar el estado a verdadero
    editStatus = true;
    id = postId;
    // Cambiar el nombre del botón de publicación
    const btnUpdate = document.querySelector('.btn-post');
    btnUpdate.textContent = 'Guardar cambios';
  };
  return handleEditAPost;
};

const userCheck = (doc) => {
  const ownerUser = doc.data().author;
  const currentUserEmail = auth.currentUser.email;
  if (ownerUser === currentUserEmail) {
    return true;
  }
  return false;
};
const showPublics = async (containerPublic) => {
  // Evitar que el contenido se repita
  while (containerPublic.firstChild) {
    containerPublic.firstChild.remove();
  }

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
        btnDelete.textContent = 'Eliminar';
        btnDelete.addEventListener('click', deleteAPost(postId));

        // Botón para eliminar post
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('btn-edit');
        btnEdit.textContent = 'Editar';
        btnEdit.addEventListener('click', editAPost(postId));

        if (userCheck(change.doc)) {
          containerEachPost.append(textEachPost, btnDelete, btnEdit);
        } else {
          containerEachPost.append(textEachPost);
        }
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
    if (!editStatus) {
      savePost(textPost);
    } else {
      editPost(id, { text: textPost.value });
      editStatus = false;
    }
    const formPost = document.querySelector('.form-post');
    formPost.reset();
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
  btnPost.classList.add('btn-post');
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
