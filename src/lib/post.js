import { collection, query } from 'firebase/firestore';
import { db, auth } from './firebase.js';

export const ref = () => query(collection(db, 'posts'));

// Editar post

export function editar(id, postText) {
  const p = document.querySelector(`[data-id="${id}"]`);
  p.removeAttribute('readonly');
  p.value = postText;

  const bEdit = document.querySelector('.edit');
  bEdit.onclick = function () {
    const postRef = db.collection('posts').doc(id);

    return postRef.update({
      text: p.value,
      userEmail: auth.currentUser.email,
    });
  };
}
