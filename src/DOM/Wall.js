import { collection, addDoc, getDocs } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../lib/index.js';
import { WallTemplate } from '../templates/wallTemplate.js';

export const Wall = (onNavigate) => {
  const div = document.createElement('div');
  div.innerHTML = WallTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const divPost = div.querySelector('.posts');
  const showPost = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        const li = `<li class='liPost' >${post.Post}</li>`;
        html += li;
      });
      divPost.innerHTML = html;
    } else {
      errorMsj.innerHTML = 'No hay posts';
    }
  };
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const getPost = await getDocs(collection(db, 'posts'));
      showPost(getPost.docs);
    } else {
      console.log('error post');
    }
  });
  const crearPost = async (contenido) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        Post: contenido,
        /* fecha: firebase.firestore.FieldValue.serverTimestamp(), */
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // esto estaba
  /*  try {
     const nuevoPost = await db.collection('posts').add({
       contenido,
       fecha: firebase.firestore.FieldValue.serverTimestamp(),
     });
     console.log(`Post creado con ID: ${nuevoPost.id}`);
   } catch (error) {
     console.error('Error al crear el post:', error);
   }
 }; */

  const btnPost = div.querySelector('#btn-post');
  const iPost = div.querySelector('#iPost');
  const btnOut = div.querySelector('#btn-out');
  btnPost.addEventListener('click', () => {
    const contenido = iPost.value.trim();

    if (contenido !== '') {
      crearPost(contenido);
      iPost.value = '';
    }
  });
  btnOut.addEventListener('click', async () => {
    await signOut(auth);
    onNavigate('/');
  });
  return div;
};
