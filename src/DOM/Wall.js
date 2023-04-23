import {
  collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, arrayUnion,
} from 'firebase/firestore';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../lib/index.js';
import { WallTemplate } from '../templates/wallTemplate.js';

export const Wall = (onNavigate) => {
  const body = document.querySelector('body');
  body.className = 'wallBody';
  const div = document.createElement('div');
  div.innerHTML = WallTemplate;
  const errorMsj = div.querySelector('#errorMsj');
  const divPost = div.querySelector('.posts');
  const iPost = div.querySelector('#iPost');
  let editStatus = false;
  let idPost = '';

  const getDocument = () => getDocs(collection(db, 'posts'));
  const getPost = (id) => getDoc(doc(db, 'posts', id));
  const updatePost = (id, newField) => updateDoc(doc(db, 'posts', id), newField);
  const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

  // valida si el usuario es igual que el correo
  const checkUser = (data) => {
    const user = data.data().Author;
    const userEmail = auth.currentUser.email;
    if (user === userEmail) {
      return true;
    }
    return false;
  };

  // borra posts
  const deleting = (content) => {
    const deletePost = content.querySelectorAll('#btn-delete');
    deletePost.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePosts(dataset.id);
      });
    });
  };

  // edita posts
  const editPost = (content) => {
    const btnEdit = content.querySelectorAll('#btn-edit');
    btnEdit.forEach((element) => element.addEventListener('click', async (e) => {
      const docu = await getPost(e.target.dataset.id);
      if (checkUser(docu)) {
        console.log('El user ES autor del post');
        iPost.value = docu.data().Post;
        idPost = docu.id;
        editStatus = true;
      } else {
        console.log('el user No es el autor del post');
        iPost.value = '';
        editStatus = false;
      }
    }));
  };
  // dar like a post
  const LikeAndCount = (content) => {
    content.addEventListener('click', async (event) => {
      if (event.target.matches('#btn-like')) {
        const postRef = doc(db, 'posts', event.target.dataset.id);
        const postSnap = await getDoc(postRef);
        const post = postSnap.data();
        const newCount = (post.heartCount || 0) + 1;
        // Verificar si la usuaria  actual ya dio "me gusta" a esta publicación
        const likedBy = post.likedBy || [];
        const currentUser = auth.currentUser;
        if (likedBy.includes(currentUser.email)) {
          console.log('La usuaria ya dio me gusta a esta publicación');
        } else {
          // Agrega el identificador de la usuaria a likedBy
          await updateDoc(postRef, {
            heartCount: newCount,
            likedBy: arrayUnion(currentUser.email),
          });
          console.log('contador de likes:', newCount);
          event.target.classList.toggle('liked');
        }
      }
    });
  };
  // muestra posts
  const showPost = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((docu) => {
        const post = docu.data();
        let li = '';
        if (checkUser(docu)) {
          li = `
          <li class='liPost' > 
            ${post.Author}: <br>
            ${post.Post}
            <buttom class="btn-class" id="btn-edit" data-id="${docu.id}">Editar</buttom>
            <button class="btn-class" id='btn-delete' data-id="${docu.id}">Eliminar</button>
          </li>
          `;
        } else {
          li = `
          <li class='liPost' > 
            ${post.Author}: <br>
            ${post.Post}
            <button class="btn-class" id='btn-like' data-id="${docu.id}">♥</button>
            <span class="post-likes">${post.heartCount || 0} Me gusta</span>
          </li>
          `;
        }
        html += li;
      });
      divPost.innerHTML = html;
    } else {
      errorMsj.innerHTML = 'No hay posts';
    }
    editPost(div);
    deleting(div);
    LikeAndCount(div, doc.id);
  };

  // valida que el usuario inicie sesion
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const getAllPosts = await getDocument();
      showPost(getAllPosts.docs);
    } else {
      console.log('error post');
    }
  });

  // Crea posts
  const crearPost = async (contenido) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        Post: contenido,
        Author: auth.currentUser.email,
        likedBy: [],
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Crea el post en la base de datos
  const btnPost = div.querySelector('#btn-post');
  const btnOut = div.querySelector('#btn-out');
  // const currentUser = auth.currentUser;
  btnPost.addEventListener('click', () => {
    const contenido = iPost.value.trim();
    if (editStatus) {
      console.log('editando');
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
