/* eslint-disable no-console */
import {
  collection, addDoc, getDocs, doc, getDoc, updateDoc,
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

  const checkUser = (data) => {
    const user = data.data().Author;
    const userEmail = auth.currentUser.email;
    if (user === userEmail) {
      return true;
    }
    return false;
  };

  const editPost = (content) => {
    const btnEdit = content.querySelectorAll('#btn-edit');
    btnEdit.forEach((element) => element.addEventListener('click', async (e) => {
      const docu = await getPost(e.target.dataset.id);
      /* const user = docu.data().Author;
      const userEmail = auth.currentUser.email; */
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

  const showPost = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((docu) => {
        const post = docu.data();
        let li = '';
        if (checkUser(docu)) {
          li = `
          <li class='liPost' >
            ${post.Post}
            <buttom class="btn-class" id="btn-edit" data-id="${docu.id}">Editar</buttom>
          </li>
          `;
        } else {
          li = `
          <li class='liPost' >
            ${post.Post}
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
  };

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const getAllPosts = await getDocument();
      showPost(getAllPosts.docs);
    } else {
      console.log('error post');
    }
  });

  const crearPost = async (contenido) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        Post: contenido,
        Author: auth.currentUser.email,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

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

  btnOut.addEventListener('click', async () => {
    await signOut(auth);
    onNavigate('/');
  });
  return div;
};
