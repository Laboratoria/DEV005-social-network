import {
  collection, query, doc, updateDoc,
} from 'firebase/firestore';
import {
  collection, query, doc, updateDoc,
} from 'firebase/firestore';
import { db, auth } from './firebase.js';

export const ref = () => query(collection(db, 'posts'));

// Editar post

export function editar(id, postText, onSave) {
  const textarea = document.querySelector(`[data-id="${id}"]`);
  textarea.removeAttribute('readonly');
  textarea.value = postText;
  console.log(textarea);

  // Asignar ID y atributo personalizado a cada botón de editar
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach((button) => {
    const postId = button.dataset.postId;
    button.addEventListener('click', () => {
    // Obtener el contenido correspondiente al post
      const postContent = document.querySelector(`#post-${postId}-content`);
      // Actualizar el contenido
      postContent.contentEditable = true;
      // Mostrar el botón de guardar correspondiente
      const saveButton = document.querySelector(`#post-${postId}-guardar`);
      saveButton.style.display = 'block';
    });
  });

  // Asignar ID y atributo personalizado a cada botón de guardar
  const saveButtons = document.querySelectorAll('.edit');
  saveButtons.forEach((button) => {
    const postId = button.dataset.postId;
    button.addEventListener('click', () => {
      // Obtener el contenido correspondiente al post
      const postContent = document.querySelector(`#post-${postId}-content`);
      // Desactivar la edición del contenido
      postContent.contentEditable = false;
      // Ocultar el botón de guardar correspondiente
      button.style.display = 'none';
    });
  });

  /* const bEdit = document.querySelector('.edit');
  bEdit.classList.add('edit');
  bEdit.textContent = 'Guardar';
  bEdit.onclick = () => { */
  const postRef = doc(db, 'posts', id);

  updateDoc(postRef, {

    text: textarea.value,
    userEmail: auth.currentUser.email,
  })
    .then(() => {
      onSave(id, textarea.value);
      editButtons.textContent = 'Editar';
      editButtons.onclick = () => editar(id, textarea.value, onSave);
    });
}
