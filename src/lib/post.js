import {
  collection, query, doc, updateDoc,
} from 'firebase/firestore';
import { db, auth } from './firebase.js';

export const ref = () => query(collection(db, 'posts'));

// Editar post

export function editar(id, postText, onSave) {
  const p = document.querySelector(`[data-id="${id}"]`);
  p.removeAttribute('readonly');
  p.value = postText;

  const bEdit = document.querySelector('.edit');
  bEdit.textContent = 'Guardar';
  bEdit.onclick = () => {
    const postRef = doc(db, 'posts', id);

    // Set the "capital" field of the city 'DC'
    updateDoc(postRef, {

      text: p.value,
      userEmail: auth.currentUser.email,
    })
      .then(() => {
        onSave(id, p.value);
        bEdit.textContent = 'Editar';
        bEdit.onclick = () => editar(id, p.value, onSave);
      })
      .catch((error) => {
        console.error('Error updating post: ', error);
      });
  };
}
