import { onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { post } from '../lib/auth.js';
import { ref, editar } from '../lib/post.js';

function home(navigateTo) {
  const postForm = document.createElement('section');
  postForm.classList.add('home');
  postForm.innerHTML = `
    <img src='./lib/img/logoHome.png' class= 'logoHome'>
    <form class="formHome">
    <textarea class="postForm" placeholder= "Comparte tu negocio..."></textarea>
    <button class= "post" > Publicar </button>
    </form>
    <button type= "submit" class= "goOut" > Salir </button>`;

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
    const textarea = postForm.querySelector('.postForm');
    const postText = textarea.value;
    if (postText.trim() === '') {
      alert('Ingrese post');
      // return false;
    }
    post(postText);
    // .then((res) => console.log('res: ', res))
    // .catch((err) => console.error(err));
    textarea.value = '';
  });

  const printPost = (info, doc) => {
    const textarea = document.createElement('textarea');
    textarea.classList.add('showPost');
    textarea.value = info.text;
    textarea.setAttribute('data-id', doc.id);
    textarea.setAttribute('readonly', true);
    postForm.appendChild(textarea);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      editar(doc.id, textarea.value, (id, newText) => {
        const editedTextarea = postForm.querySelector(`[data-id="${id}"]`);
        editedTextarea.value = newText;
      });
    });

    console.log('correo en sesión: ', auth.currentUser.email);
    console.log('emial: ', info.userEmail);
    if (auth.currentUser.email === info.userEmail) {
      postForm.appendChild(editButton);
    }

    return postForm;
  };

  onSnapshot(ref(), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postInfo = doc.data();
      // Buscar el post existente por el id del documento
      const postExists = postForm.querySelector(`[data-id="${doc.id}"]`);
      if (postExists) {
        const textarea = postExists.querySelector('textarea');
        textarea.removeAttribute('readonly');
        textarea.setAttribute('contenteditable', true);
      } else {
        const nodoP = printPost(postInfo, doc);
        nodoP.setAttribute('data-id', doc.id);
        nodoP.setAttribute('contenteditable', true);
        /* postForm.append(nodoP); */
      }
    });
  });

  const idInitSecion = localStorage.getItem('userId');
  console.log(idInitSecion);
  return postForm;
}

export { home };
