import {
  savePost,
  createSnapshot,
  deletePost,
  getPost,
  updatePost,
} from '../lib/index.js';
import { exit } from '../lib/auth.js';

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
  let editStatus = false;
  let id = '';
  const readPost = (posts) => {
    let html = '';
    posts.forEach((docs) => {
      const publication = docs.data;
      html += `
        <div>
          <p id="textPost" class="textPost">${publication.txtMascotiemos}</p>
          <section class="containerButtons">
          <button id="btnDelete" class="btnDelete" data-id="${docs.id}">Eliminar</button>
          <button id="btnEdit" class="btnEdit" data-id="${docs.id}">Editar</button>
          </section>
          </div>
      `;
    });

    postContainer.innerHTML = html;

    const btnsDelete = postContainer.querySelectorAll('.btnDelete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        deletePost(event.target.dataset.id);
      });
    });

    const btnsEdit = postContainer.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        const docu = await getPost(event.target.dataset.id);
        const post = docu.data();

        postForm.txtMascotiemos.value = post.txtMascotiemos;
        editStatus = true;
        id = event.target.dataset.id;
      });
    });
  };
  createSnapshot(readPost);

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const post = postForm.txtMascotiemos;
    if (!editStatus) {
      savePost(post.value);
    } else {
      updatePost(id, {
        txtMascotiemos: post.value,
      });
      editStatus = false;
    }

    postForm.reset(); // Limpia el textarea
  });

  return section;
}
