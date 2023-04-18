import { collection, addDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../lib/index.js';
import { WallTemplate } from '../templates/wallTemplate.js';

export const Wall = (onNavigate) => {
  const div = document.createElement('div');
  div.innerHTML = WallTemplate;

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
