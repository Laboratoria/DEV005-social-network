import { onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { post } from '../lib/auth.js';
import { ref } from '../lib/post.js';
import { printPost } from './PrintPost.js';

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
  onSnapshot(ref(), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const nodoP = printPost(doc.data());
      postForm.append(nodoP);
    });
  });
  return postForm;
}

/* const postSection = document.createElement('section');
postSection.classList.add('postSection');
postSection.innerHTML = showCapture;
console.log(postSection); */

export { home };
