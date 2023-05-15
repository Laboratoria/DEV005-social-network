/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { signOut, updateCurrentUser } from 'firebase/auth';
import { arrayUnion } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import {
  addPostToFirestore, deletePostFromFirestore, likePost, q, onSnapshot, dislikePost, updatePostFirestore,
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

  // Creación botón Back to Top
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'back-to-top';
  const backToTop = document.createElement('img');
  backToTop.id = 'back-to-top-img';
  backToTop.src = './images/top-svgrepo-com.svg';
  backToTop.alt = 'arrow up';
  // Funcionalidad del botón backToTop
  backToTopBtn.append(backToTop);
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      newPostAuthor.textContent = doc.data().user.split('@')[0];
      const newPost = document.createElement('textarea');
      newPost.readOnly = true;
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
        const btnEdit = document.createElement('button');
        btnEdit.id = 'btn-edit';
        btnEdit.textContent = 'Editar';

        btnEdit.addEventListener('click', () => {
          console.log('Editing post with ID:', doc.id);
          if (newPost.readOnly) {
            newPost.readOnly = false;
            newPost.style.backgroundColor = '#ffc1c1a7';
            btnEdit.innerHTML = 'Guardar';
          } else {
            const newText = newPost.value;
            updatePostFirestore(doc.id, newText);
            newPost.readOnly = true;
            newPost.style.backgroundColor = 'white';
            btnEdit.innerHTML = 'Editar';
          }
        });

        newPostBtns.append(btnEdit, btnDelete);
      }

      // Creación de contador de likes
      const likesCounter = document.createElement('div');
      likesCounter.classList.add('likes-counter');
      likesCounter.textContent = arrayLikes.length;

      // Ícono de corazón
      const heartIcon = document.createElement('img');
      heartIcon.id = 'heart-icon';
      heartIcon.src = './images/heart-svgrepo-com.svg';
      heartIcon.src = './images/heart-svgrepo-com.svg';
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
      newPostCont.append(newPostAuthor, newPost, btnsContainer, newPostBtns);
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
    backToTopBtn,
  );
  return wallSection;
}

export default wall;
