import {
  // eslint-disable-next-line max-len
  collection, addDoc, doc, getDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove, onSnapshot, orderBy, query,
} from 'firebase/firestore';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../lib/index.js';
import { WallTemplate } from '../templates/wallTemplate.js';

export const Wall = (onNavigate) => {
  const body = document.querySelector('body');
  body.className = 'wallBody';
  const div = document.createElement('div');
  div.innerHTML = WallTemplate;
  const divPost = div.querySelector('.posts');
  const iPost = div.querySelector('#iPost');
  const btnPost = div.querySelector('#btn-post');
  let editStatus = false;
  let idPost = '';
  let savePostTarget = '';

  const getPost = (id) => getDoc(doc(db, 'posts', id));
  const updatePost = (id, newField) => updateDoc(doc(db, 'posts', id), newField);
  const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));
  const realTime = (callback) => onSnapshot(query(collection(db, 'posts'), orderBy('date', 'desc')), callback);
  // valida si el usuario es igual que el correo
  const checkUser = (data) => {
    const user = data.data().Author;
    const userEmail = auth.currentUser.email;
    if (user === userEmail) {
      return true;
    }
    return false;
  };
  const modalContent = div.querySelector('.modal-content');
  const deleteModal = (content) => {
    const deleteBtn = content.querySelectorAll('#btn-delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        modalContent.style.display = 'flex';
        const deletePost = content.querySelector('#btn-ok');
        deletePost.addEventListener('click', () => {
          deletePosts(dataset.id);
          modalContent.style.display = 'none';
        });
        const cancelBtn = content.querySelector('#btn-cancel');
        cancelBtn.addEventListener('click', () => {
          modalContent.style.display = 'none';
        });
      });
    });
  };

  // edita posts
  const editPost = (content) => {
    const btnEdit = content.querySelectorAll('#btn-edit');
    btnEdit.forEach((element) => element.addEventListener('click', async (e) => {
      btnPost.textContent = 'Guardar';
      const docu = await getPost(e.target.dataset.id);
      if (checkUser(docu)) {
        iPost.focus();
        iPost.value = docu.data().Post;
        idPost = docu.id;
        editStatus = true;
        savePostTarget = e.target.dataset.id;
      } else {
        iPost.value = '';
        editStatus = false;
      }
    }));
  };
  const LikeAndDislike = (content) => {
    const btnLike = content.querySelectorAll('#btn-like');
    btnLike.forEach((like) => {
      like.addEventListener('click', async (event) => {
        if (event.target.matches('#btn-like')) {
          const postRef = doc(db, 'posts', event.target.dataset.id);
          const postSnap = await getDoc(postRef);
          const post = postSnap.data();
          const likedBy = post.likedBy || [];
          const currentUser = auth.currentUser;
          let newCount;
          if (likedBy.includes(currentUser.email)) {
            await updateDoc(postRef, {
              likedBy: arrayRemove(currentUser.email),
            });
            newCount = likedBy.length - 1;
          } else {
            await updateDoc(postRef, {
              likedBy: arrayUnion(currentUser.email),
            });
            newCount = likedBy.length + 1;
          }
          console.log('contador de likes:', newCount);
        }
      });
    });
  };
  // valida que el usuario inicie sesion
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      realTime((data) => {
        let html = '';
        data.forEach((docu) => {
          const post = docu.data();
          let li = '';
          const author = post.Author.split('@')[0];
          if (checkUser(docu)) {
            li = `
            <div class="container-liPost">
              <li class='liPost'> 
                <p class="author"><b>${author}</b></p>
                ${post.Post}
                <span class="post-likes">${post.likedBy.length} Me gusta</span>
                <button class="btn-class" id='btn-edit' data-id="${docu.id}">Editar</button>
                <button class="btn-class" id='btn-delete' data-id="${docu.id}">Eliminar</button>
              </li>
            </div>
            `;
          } else {
            li = `
            <div class="container-liPost">
              <li class='liPost'> 
                <p class="author"><b>${author}</b></p>
                ${post.Post}
                <button class="btn-class" id='btn-like' data-id="${docu.id}">♥</button>
                <span class="post-likes">${post.likedBy.length} Me gusta</span>
              </li>
            </div>
            `;
          }
          html += li;
        });
        divPost.innerHTML = html;
        editPost(div);
        deleteModal(div);
        LikeAndDislike(div);
      });
    } else {
      onNavigate('/');
    }
  });

  // Crea posts
  const crearPost = async (contenido) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        Post: contenido,
        Author: auth.currentUser.email,
        likedBy: [],
        date: Date.now(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Crea el post en la base de datos
  const btnOut = div.querySelector('#btn-out');
  btnPost.addEventListener('click', () => {
    const contenido = iPost.value.trim();
    if (editStatus) {
      btnPost.textContent = 'Publicar';
      div.querySelector(`[data-id='${savePostTarget}']`).focus();
      updatePost(idPost, { Post: iPost.value, Author: auth.currentUser.email });
      editStatus = false;
    } else if (contenido !== '') {
      crearPost(contenido);
    }
    iPost.value = '';
  });

  // salir de sesion
  btnOut.addEventListener('click', async () => {
    await signOut(auth);
    onNavigate('/');
  });

  return div;
};
