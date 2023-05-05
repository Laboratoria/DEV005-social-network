import { onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import {
  editPost, ref, deleteDocData, post, like, disLike,
} from '../lib/post.js';

function home(navigateTo) {
  const postForm = document.createElement('section');
  postForm.classList.add('home');
  postForm.innerHTML = `
    <img src='./lib/img/logoHome.png' class= 'logoHome'>
    <form class="formHome">
    <textarea class="areaPost" placeholder= "Comparte tu negocio..."></textarea>
    <button class= "post" > Publicar </button>
    </form>
    <button class= "goOut" > Salir </button>`;

  const salir = postForm.querySelector('.goOut');
  salir.addEventListener('click', () => {
    signOut(auth).then(() => {
      navigateTo('/');
    }).catch(() => {
    });
  });

  const buttonPost = postForm.querySelector('.post');
  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textarea = postForm.querySelector('.areaPost');
    const postText = textarea.value;
    if (postText.trim() !== '') {
      post(postText);
    } else {
      // eslint-disable-next-line no-alert
      alert('Ingrese post');
    }
    textarea.value = '';
  });

  const printPost = (info, doc) => {
    const postContainer = document.createElement('div');
    postContainer.classList.add('divPost');
    const name = document.createElement('h6');
    name.classList.add('userName');
    postContainer.appendChild(name);
    name.innerHTML = `${info.userEmail}`;

    const textarea = document.createElement('textarea');
    textarea.classList.add('showPost');
    textarea.value = info.text;
    postContainer.setAttribute('data-id', doc.id);
    textarea.setAttribute('readonly', true);
    postContainer.appendChild(textarea);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsPost');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      if (editButton.textContent === 'Editar') {
        editButton.textContent = 'Guardar';
        textarea.removeAttribute('readonly');
      } else if (editButton.textContent === 'Guardar') {
        const editedTextarea = postContainer.querySelector('textarea').value;
        editPost(doc.id, editedTextarea);
        editButton.textContent = 'Editar';
        textarea.setAttribute('readonly', true);
      }
    });
    // Se visuliza botón editar solo en el usuario logueado
    if (auth.currentUser.email === info.userEmail) {
      buttonsContainer.appendChild(editButton);
    }

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals, no-alert
      const confirmDelete = confirm('¿Estás seguro que deseas eliminar este post?');
      if (confirmDelete) {
        deleteDocData(doc.id);
        deleteButton.value = doc.id;
        deleteButton.closest('.divPost').remove();
      }
    });
    if (auth.currentUser.email === info.userEmail) {
      buttonsContainer.appendChild(deleteButton);
    }
    // Creacion de botón de like
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-btn');

    likeButton.addEventListener('click', () => {
      if (doc.data().likes.includes(auth.currentUser.email)) {
        disLike(doc.id, auth.currentUser.email);
      } else {
        like(doc.id, auth.currentUser.email);
      }
    });

    buttonsContainer.appendChild(likeButton);
    postContainer.appendChild(buttonsContainer);
    postForm.appendChild(postContainer);

    return postForm;
  };

  onSnapshot(ref(), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postInfo = doc.data();
      // Buscar el post existente por el id del documento
      const postExists = postForm.querySelector(`div[data-id="${doc.id}"]`);
      if (postExists) {
        const textarea = document.querySelector('.showPost');
        textarea.removeAttribute('readonly');
      } else {
        const nodoP = printPost(postInfo, doc);
        nodoP.setAttribute('data-id', doc.id);
      }
      // like
      const buttonLike = postForm.querySelector(`div[data-id="${doc.id}"]`).querySelector('.like-btn');
      buttonLike.innerHTML = `<i class="fas fa-heart"></i> ${postInfo.likes.length}`;
      if (buttonLike) {
        buttonLike.addEventListener('click', () => {
          if (doc.data().likes.includes(auth.currentUser.email)) {
            disLike(doc.id, auth.currentUser.email);
          } else {
            like(doc.id, auth.currentUser.email);
          }
        });
      }
    });
  });

  localStorage.getItem('userId');
  return postForm;
}

export { home };
