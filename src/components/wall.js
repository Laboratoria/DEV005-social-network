import { logoutApp } from '../lib/logout.js';
import {
  savePost, onGetPost, deletePost, getOnePost, editPost, removeLike, updateLike,
} from '../lib/posting.js';
import { auth } from '../lib/firebase.js';

let id = '';
let editStatus = false;

// Guardar
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

// Eliminar publicación
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
  const handleEditAPost = (event) => {
    event.preventDefault();
    // Obtener el contenido de la publicación seleccionada
    const doc = getOnePost(postId);
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

// Dar like a publicación
const likeAPost = (postId, numLikes) => {
  const handleLikeAPost = async (event) => {
    event.preventDefault();
    await getOnePost(postId).then(async (doc) => {
      const getLikes = doc.data();
      const countLikes = getLikes.likes;
      const currentUserEmail = auth.currentUser.email;
      if (countLikes.includes(currentUserEmail)) {
        removeLike(postId, currentUserEmail);
      } else {
        updateLike(postId, currentUserEmail);
      }
      const updatedPost = await getOnePost(postId); // Obtener el post actualizado del servidor
      const updatedLikes = updatedPost.data().likes; // Obtener el nuevo número de likes
      numLikes.textContent = updatedLikes.length;
      // Actualiza el elemento de interfaz de usuario con el nuevo número de likes
    });
  };
  return handleLikeAPost;
};

// Ver si el usuario actual es dueño de una publicación o no
const userCheck = (doc) => {
  const ownerUser = doc.data().author;
  const currentUserEmail = auth.currentUser.email;
  if (ownerUser === currentUserEmail) {
    return true;
  }
  return false;
};
// Mostrar publicaciones
const showPublics = async (containerPublic) => {
  // Evitar que el contenido se repita
  while (containerPublic.firstChild) {
    containerPublic.firstChild.remove();
  }
  onGetPost((querySnapshot) => {
    // Revisa cambios tipo "añadido" en los documentos y los muestra
    // Añade solo los elementos nuevos (evita que se dupliquen los post)
    querySnapshot.docChanges().forEach((change) => {
      const postData = change.doc.data();
      const postId = change.doc.id;
      if (change.type === 'added') {
        // Crea el contenedor de cada post
        const containerEachPost = document.createElement('div');
        containerEachPost.classList.add('container-each-post');
        containerEachPost.setAttribute('id', postId);

        // Inserta el texto
        const textEachPost = document.createElement('p');
        textEachPost.classList.add('text-each-post');
        textEachPost.textContent = postData.text;

        // Número de likes
        const numLikes = document.createElement('p');
        numLikes.classList.add('num-likes');

        // Obtener la cantidad de likes de la publicación
        const countLikes = postData.likes.length;
        numLikes.textContent = countLikes;

        // Botón para dar like
        const btnLike = document.createElement('button');
        btnLike.classList.add('btn-like');
        btnLike.textContent = 'Like';
        btnLike.addEventListener('click', likeAPost(postId, numLikes));

        // Botón para eliminar publicación
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.textContent = 'Eliminar';
        btnDelete.addEventListener('click', deleteAPost(postId));

        // Botón para eliminar publicación
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('btn-edit');
        btnEdit.textContent = 'Editar';
        btnEdit.addEventListener('click', editAPost(postId));

        // Revisar si el usuario es dueño de la publicación
        if (userCheck(change.doc)) {
          containerEachPost.append(textEachPost, btnLike, numLikes, btnDelete, btnEdit);
        } else {
          containerEachPost.append(textEachPost, btnLike, numLikes);
        }
        // Inserta en el contenedor de todos los posts
        containerPublic.append(containerEachPost);

        // Actualizar los cambios
      } else if (change.type === 'modified') {
        const elementToUpdate = document.getElementById(postId);
        elementToUpdate.firstChild.textContent = postData.text;
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

function wall(navigateTo) {
  const containerPost = document.createElement('section');
  containerPost.classList.add('container-post');
  // contenerdor de titulo y btn cerrar seción
  const divContent = document.createElement('div');
  divContent.classList.add('div-content');
  const divGroupHeader = document.createElement('div');
  divGroupHeader.classList.add('div-header');
  // Título Playverse
  const nameTitle = document.createElement('h1');
  nameTitle.classList.add('post-title');
  nameTitle.textContent = 'PLAYVERSE';
  divContent.append(divGroupHeader);
  // Botón para cerrar sesión
  const btnLogout = document.createElement('button');
  btnLogout.classList.add('btn-logout');
  btnLogout.textContent = 'Cerrar sesión';
  btnLogout.addEventListener('click', navigateToLoginAfterLogout(navigateTo));
  divGroupHeader.append(nameTitle, btnLogout);
  // Formulario de crear publicación
  const formPost = document.createElement('form');
  formPost.classList.add('form-post');
  const divGroup = document.createElement('div');
  divGroup.classList.add('div-group');
  const textPost = document.createElement('textarea');
  textPost.id = 'text-post';
  textPost.placeholder = '¿Qué quieres compartir?';
  // const labelPost = document.createElement('label');
  // labelPost.classList.add('label-post');
  // labelPost.textContent = '¿Qué quieres compartir?';
  // labelPost.setAttribute('for', 'text-post');

  // Botón para publicar
  const btnPost = document.createElement('button');
  btnPost.classList.add('btn-post');
  btnPost.textContent = 'Publicar';
  btnPost.type = 'submit';
  formPost.addEventListener('submit', saveAPost(textPost));
  divGroup.append(btnPost, textPost);
  formPost.append(divGroup);

  // Contenedor donde van los post
  const containerPublic = document.createElement('div');
  containerPublic.classList.add('container-public');
  showPublics(containerPublic);

  containerPost.append(divContent, formPost, containerPublic);

  return containerPost;
}
export default wall;
