import {
  savePost,
  createSnapshot,
  deletePost,
  getPost,
  updatePost,
  auth,
} from '../lib/index.js';
import { exit } from '../lib/auth.js';

let editStatus = false;
let id = '';

export default function home() {
  const section = document.createElement('section');
  const htmlBienvenida = `
  <main>
    <header class="contenedorLogoHome">
      <img class="imgLogoHome" src="img/logo.png" alt="logo">
      <h1>Bienvenida a Mascoteando</h1>
      <button name="logOut" id="logOut" class="logOut">Cerrar sesión</button>
    </header>
    
    <section class="containerForm">
      <form id="post-form" class="post-form">
        <textarea type="text" name="txtMascotiemos" class="txtMascotiemos" id="txtMascotiemos" rows="3" placeholder="Mascotiemos..."></textarea> 
        <button id="btnPost" class="btnPost"><img class="btnPostImg" src="./img/btnPublicar.png" alt="post"></img></button>
      </form>
      <div id ="containerPost" class ="containerPost"></div>
    </section>
   
    
  </main>`;

  section.innerHTML = htmlBienvenida;

  const btnLogOut = section.querySelector('#logOut');
  btnLogOut.addEventListener('click', () => {
    exit();
  });

  const postForm = section.querySelector('#post-form');
  const postContainer = section.querySelector('#containerPost');

  const readPost = (posts) => {
    let html = '';
    posts.forEach((docs) => {
      const publication = docs.data;
      const ownerId = publication.userId;
      const currentUser = auth.currentUser;
      if (ownerId === currentUser.uid) {
        html += `
          <div>
            <p id="textPost" class="textPost">${publication.txtMascotiemos}</p>
            <section class="containerButtons">
              <button class="btnDelete" id="btnDelete" data-id="${docs.id}" data-owner-id="${ownerId}">Eliminar</button>
              <button class="btnEdit" data-id="${docs.id}" data-owner-id="${ownerId}">Editar</button>
            </section>
          </div>
        `;
      } else {
        html += `
          <div>
            <p id="textPost" class="textPost">${publication.txtMascotiemos}</p>
          </div>
        `;
      }
    });
    postContainer.innerHTML = html;

    const btnsDelete = postContainer.querySelectorAll('#btnDelete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        const postId = dataset.id;
        deletePost(postId);
      });
    });

    const btnsEdit = postContainer.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        const commentUser = await getPost(event.target.dataset.id);
        const post = commentUser.data().txtMascotiemos;
        postForm.txtMascotiemos.value = post;
        editStatus = true;
        id = event.target.dataset.id;
      });
    });
  };

  createSnapshot(readPost);

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const txtMascotiemos = postForm.txtMascotiemos.value.trim();
    if (!editStatus) {
      savePost(txtMascotiemos);
    } else {
      updatePost(id, {
        txtMascotiemos,
      });
      editStatus = false;
      id = '';
    }
    postForm.reset();
  });
  return section;
}
