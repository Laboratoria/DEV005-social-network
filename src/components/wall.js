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
const deleteAPost = (postId, modalContainer) => {
  const handleDeleateAPost = async (event) => {
    event.preventDefault();
    await deletePost(postId);
    // Obtener el contenedor del post que se va a eliminar
    const containerEachPost = document.getElementById(postId);
    // Eliminar el contenedor del post de la pantalla
    containerEachPost.remove();
    modalContainer.remove();
  };
  return handleDeleateAPost;
};

// Editar una publicación
const editAPost = (postId, btnDelete) => {
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
    btnDelete.disabled = true;
    const btnUpdate = document.querySelector('.btn-post');
    btnUpdate.textContent = 'Guardar cambios';
    btnUpdate.addEventListener('click', () => {
      btnDelete.disabled = false;
    });
  };
  return handleEditAPost;
};

// Dar like a publicación
const likeAPost = (postId, numLikes, btnLike) => {
  const handleLikeAPost = async (event) => {
    event.preventDefault();
    // Obtener la publicación por su id
    await getOnePost(postId)
      .then(async (doc) => {
        const getLikes = doc.data();
        // Obtener un arreglo de los likes de la publicación
        const countLikes = getLikes.likes;
        // Consultar email del usuario actual
        const currentUserEmail = auth.currentUser.email;
        // Verificar si la lista contiene al usuario actual
        // Si lo contiene remueve el me gusta, si no lo tiene, lo añade
        if (countLikes.includes(currentUserEmail)) {
          removeLike(postId, currentUserEmail);
          btnLike.classList.remove('liked');
        } else {
          updateLike(postId, currentUserEmail);
          btnLike.classList.add('liked');
        }
        // Obtener el post actualizado del servidor
        const updatedPost = await getOnePost(postId);
        // Obtener el nuevo número de likes
        const updatedLikes = updatedPost.data().likes;
        // Actualizar el elemento de interfaz de usuario con el nuevo número de likes
        numLikes.textContent = updatedLikes.length;
      });
  };
  return handleLikeAPost;
};

// Crear modal
const createModal = (postId, containerEachPost, btnEdit) => {
  const handleCreateModal = (event) => {
    btnEdit.disabled = true;
    // Verificar si el modal ya existe en el DOM
    const existingModal = document.getElementById('modal');
    if (existingModal) {
      existingModal.remove(); // Salir de la función si el modal ya existe
    }
    event.preventDefault();
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');
    modalContainer.setAttribute('id', 'modal');
    modalContainer.textContent = '¿Deseas eliminar definitivamente?';

    const modalButtons = document.createElement('div');
    modalButtons.classList.add('modal-buttons');

    const btnConfirm = document.createElement('button');
    btnConfirm.classList.add('btn-confirm');
    btnConfirm.textContent = 'Sí';
    btnConfirm.addEventListener('click', deleteAPost(postId, modalContainer));

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-cancel');
    btnCancel.textContent = 'No';
    btnCancel.addEventListener('click', () => {
      btnEdit.disabled = false;
      modalContainer.remove();
    });
    modalButtons.append(btnCancel, btnConfirm);
    modalContainer.append(modalButtons);
    containerEachPost.appendChild(modalContainer);
  };
  return handleCreateModal;
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
  if (containerPublic.firstChild) {
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
        btnLike.textContent = 'Me gusta';
        btnLike.addEventListener('click', likeAPost(postId, numLikes, btnLike));

        // Verificar si el usuario actual ya dio like a la publicación y agregar la clase .liked
        const currentUserEmail = auth.currentUser.email;
        if (postData.likes.includes(currentUserEmail)) {
          btnLike.classList.add('liked'); // Agregar clase .liked si el usuario ya dio like
        }

        // Botón para eliminar publicación
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.textContent = 'Eliminar';

        // Botón para eliminar publicación
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('btn-edit');
        btnEdit.textContent = 'Editar';
        btnEdit.addEventListener('click', editAPost(postId, btnDelete));
        btnDelete.addEventListener('click', createModal(postId, containerEachPost, btnEdit));
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
