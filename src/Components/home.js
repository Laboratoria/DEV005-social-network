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

    const textarea = document.createElement('textarea');
    textarea.classList.add('showPost');
    textarea.value = info.text;
    textarea.setAttribute('data-id', doc.id);
    textarea.setAttribute('readonly', true);
    postContainer.appendChild(textarea);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      if (editButton.textContent === 'Editar') {
        editButton.textContent = 'Guardar';
        textarea.removeAttribute('readonly');
      } else if (editButton.textContent === 'Guardar') {
        const editedTextarea = postForm.querySelector(`[data-id="${doc.id}"]`).value;
        editPost(doc.id, editedTextarea);
        editButton.textContent = 'Editar';
        textarea.setAttribute('readonly', true);
      }
    });
    // Se visuliza botón editar solo en el usuario logueado
    if (auth.currentUser.email === info.userEmail) {
      postContainer.appendChild(editButton);
    }
    postForm.appendChild(postContainer);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals, no-alert
      const confirmDelete = confirm('¿Estás seguro que deseas eliminar este post?');
      if (confirmDelete) {
        deleteDocData(doc.id);
        deleteButton.value = doc.id;
        deleteButton.parentElement.remove();
      }
    });
    if (auth.currentUser.email === info.userEmail) {
      postContainer.appendChild(deleteButton);
    }
    // Dar like y dislike
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-btn');
    likeButton.textContent = 'Like';
    // const disLikeButton = document.createElement('button');
    // disLikeButton.classList.add('disLike-btn');
    // disLikeButton.textContent = 'DisLike';

    likeButton.addEventListener('click', () => {
      if (doc.data().likes.includes(auth.currentUser.email)) {
        disLike(doc.id, auth.currentUser.email);
      } else {
        console.log('like', doc.id, auth.currentUser.email);
        like(doc.id, auth.currentUser.email);
      }
    });
    postContainer.appendChild(likeButton);

    return postForm;
  };

  onSnapshot(ref(), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postInfo = doc.data();
      // Buscar el post existente por el id del documento
      const postExists = postForm.querySelector(`[data-id="${doc.id}"]`);
      if (postExists) {
        const textarea = document.querySelector('.showPost');
        textarea.removeAttribute('readonly');
        console.log('actualizando publicacion');
      } else {
        console.log('agregando nueva');
        const nodoP = printPost(postInfo, doc);
        nodoP.setAttribute('data-id', doc.id);
      }
    });
  });

  localStorage.getItem('userId');
  return postForm;
}

export { home };
