/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { signOut } from 'firebase/auth';
// import { doc } from '@firebase/firestore';
import { auth, db } from '../lib/firebase';
import {
  addPostToFirestore, deletePostFromFirestore, likePost, q, onSnapshot, addPostFromFirestore,
} from '../lib/post';

function wall() {
  const wallSection = document.createElement('section');
  wallSection.id = 'wall-section';
  const navBar = document.createElement('nav');
  navBar.id = 'nav-bar';
  const nameApp = document.createElement('h3');
  nameApp.id = 'name-App';
  nameApp.textContent = 'KittyBook';
  const btnLogOut = document.createElement('button');
  btnLogOut.id = 'log-out';
  btnLogOut.textContent = 'Cerrar sesión';

  // Escribir posts
  const writeContainer = document.createElement('section');
  writeContainer.id = 'write-container';
  const post = document.createElement('textarea');
  post.id = 'text-posts';
  post.placeholder = '...';
  const btnSendPost = document.createElement('button');
  btnSendPost.id = 'send-post';
  btnSendPost.type = 'submit';
  btnSendPost.textContent = 'Publicar';
  btnSendPost.disabled = true;

  // Visualización de los posts
  const postsContainer = document.createElement('section');
  postsContainer.id = 'posts-container';

  // Deshabilitar btnSendPost hasta que haya algo escrito
  post.addEventListener('keyup', () => {
    if ((post.value !== '') && (post.value.length >= 2)) {
      btnSendPost.disabled = false;
    } else {
      btnSendPost.disabled = true;
    }
  });

  // Creación de modal y todos sus elementos
  const modal = document.createElement('div');
  modal.id = 'deletion-modal';
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalText = document.createElement('p');
  modalText.textContent = 'Esta publicación será eliminada';

  const btnConfirmDelete = document.createElement('button');
  btnConfirmDelete.id = 'confirm-delete';
  btnConfirmDelete.textContent = 'Confirmar';

  const btnCancelDelete = document.createElement('button');
  btnCancelDelete.id = 'cancel-delete';
  btnCancelDelete.textContent = 'Cancelar';

  // Append elements to the modal
  modalContent.append(modalText, btnConfirmDelete, btnCancelDelete);
  modal.append(modalContent);

  // Cerrar el modal si se da click en cancelar
  btnCancelDelete.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  btnSendPost.addEventListener('click', () => {
    const postText = post.value;
    addPostToFirestore(postText);
    post.value = '';
    btnSendPost.disabled = true;

    // Función btn-edit
    // bntEdit.addEventListener('click', () => {
    //   if (newPost.readOnly) {
    //     newPost.readOnly = false;
    //     bntEdit.textContent = 'Guardar';
    //   } else {
    //     const newText = newPost.value;

    //     newPost.readOnly = true;
    //     bntEdit.textContent = 'Editar';
    //   }
    // });

    // // Función botón dar Like
    // btnLike.addEventListener('click', () => {
    //   addPostFromFirestore();
    // });

    // Función botón borrar post
    // btnDelete.addEventListener('click', () => {
    //   const docRef = doc(db, 'posts', post.id);
    //   deletePostFromFirestore(docRef);
    //   newPostCont.remove();
    // });

    // btnsContainer.append(btnLike);
    // newPost.append(bntEdit, btnDelete);
    // newPostCont.append(newPost, btnsContainer);
  });

  btnLogOut.addEventListener('click', () => {
    signOut(auth);
    console.log('Se cerró sesión correctamente');
  });

  // Función para traer los posts de Firestore en tiempo real
  onSnapshot(q, (querySnapshot) => {
    // Clear postsContainer before adding new posts
    postsContainer.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const newPostCont = document.createElement('section');
      console.log('Current posts:', doc.id, doc.data().text, doc.data().user, doc.data().likes);
      newPostCont.classList = 'cont-posted';
      const newPost = document.createElement('div');
      newPost.className = 'posted';
      newPost.textContent = doc.data().text;

      const btnsContainer = document.createElement('div');
      btnsContainer.id = 'btns-cont';

      // Creación botón Eliminar
      const btnDelete = document.createElement('button');
      btnDelete.id = 'btn-delete';
      btnDelete.textContent = 'Borrar';
      // Manejo modal eliminar
      btnDelete.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      // Confirmar eliminación
      btnConfirmDelete.onclick = () => {
        deletePostFromFirestore(doc.id);
        newPostCont.remove();
        modal.style.display = 'none';
      };

      // Creación botón Editar
      const bntEdit = document.createElement('button');
      bntEdit.id = 'btn-edit';
      bntEdit.textContent = 'Editar';

      // Creación botón Like
      const btnLike = document.createElement('button');
      btnLike.id = 'btn-like';
      btnLike.textContent = 'Me gusta';

      btnsContainer.append(btnLike);
      newPost.append(bntEdit, btnDelete);
      newPostCont.append(newPost, btnsContainer);
      postsContainer.append(newPostCont);
    });
  });

  // Orden provisorio que le dejé al append
  navBar.append(nameApp, btnLogOut);
  writeContainer.append(post, btnSendPost);
  wallSection.append(
    navBar,
    writeContainer,
    postsContainer,
    modal,
  );
  return wallSection;
}

export default wall;
