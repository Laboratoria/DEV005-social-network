import { onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { post } from '../lib/auth.js';
import { editPost, ref } from '../lib/post.js';

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
      const editContainer = document.createElement('div');
      editContainer.appendChild(editButton);
      postContainer.appendChild(editContainer);
    }
    postForm.appendChild(postContainer);

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
        textarea.setAttribute('contenteditable', true);
      } else {
        const nodoP = printPost(postInfo, doc);
        nodoP.setAttribute('data-id', doc.id);
      }
    });
  });

  localStorage.getItem('userId');
  return postForm;
}

export { home };
