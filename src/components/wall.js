/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { signOut, updateCurrentUser } from 'firebase/auth';
// import { doc } from '@firebase/firestore';
import { arrayUnion } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import {
  addPostToFirestore, deletePostFromFirestore, likePost, q, onSnapshot, dislikePost,
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
  });

  btnLogOut.addEventListener('click', () => {
    signOut(auth);
    console.log('Se cerró sesión correctamente');
  });

  // Función para traer los posts de Firestore en tiempo real
  onSnapshot(q, (querySnapshot) => {
  // Clear postsContainer before adding new posts
    postsContainer.innerHTML = '';
    const currentUserEmail = auth.currentUser.email;

    querySnapshot.forEach((doc) => {
      const newPostCont = document.createElement('section');
      console.log('Current posts:', doc.id, doc.data().text, doc.data().user, doc.data().likes);
      newPostCont.classList = 'cont-posted';
      const newPostAuthor = document.createElement('div');
      newPostAuthor.className = 'posted-author';
      newPostAuthor.id = 'posted-author';
      newPostAuthor.textContent = doc.data().user.split('@')[0];
      const newPost = document.createElement('div');
      newPost.className = 'posted';
      newPost.textContent = doc.data().text;

      const btnsContainer = document.createElement('div');
      btnsContainer.id = 'btns-cont';
      const arrayLikes = doc.data().likes;
      const newPostBtns = document.createElement('div');
      newPostBtns.className = 'posted-btns';
      // Validar que el usuario loggeado sea el autor del post
      if (doc.data().user === currentUserEmail) {
      // Creación botón Eliminar
        const btnDelete = document.createElement('button');
        btnDelete.id = 'btn-delete';
        btnDelete.textContent = 'Borrar';
        // Manejo modal eliminar
        btnDelete.addEventListener('click', () => {
          console.log('Deleting post with ID:', doc.id);
          modal.style.display = 'block';
          const postIdToDelete = doc.id;

          // Confirmar eliminación
          btnConfirmDelete.onclick = () => {
            console.log(postIdToDelete);
            deletePostFromFirestore(postIdToDelete);
            newPostCont.remove();
            modal.style.display = 'none';
          };
        });

        // Creación botón Editar
        const bntEdit = document.createElement('button');
        bntEdit.id = 'btn-edit';
        bntEdit.textContent = 'Editar';

        newPostBtns.append(bntEdit, btnDelete);
      }

      // Creación de contador de likes
      const likesCounter = document.createElement('div');
      likesCounter.classList.add('likes-counter');
      likesCounter.textContent = arrayLikes.length;
      // Ícono de corazón
      const heartIcon = document.createElement('img');
      heartIcon.id = 'heart-icon';
      heartIcon.src = '/images/heart-svgrepo-com.svg';
      heartIcon.alt = 'heart icon';
      likesCounter.append(heartIcon);
      // Creación botón Like
      const btnLike = document.createElement('button');
      btnLike.id = 'btn-like';
      btnLike.textContent = 'Me gusta';
      btnLike.addEventListener('click', () => {
        if (arrayLikes.includes(currentUserEmail)) {
          dislikePost(currentUserEmail, doc.id);
        } else {
          likePost(currentUserEmail, doc.id);
        }
      });

      btnsContainer.append(likesCounter, btnLike);
      newPost.append(newPostBtns);
      newPostCont.append(newPostAuthor, newPost, btnsContainer);
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
