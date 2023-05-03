import {
  savePost,
  createSnapshot,
  deletePost,
  getPost,
  updatePost,
  auth,
  like,
  dislike,
} from '../lib/index.js';
import { exit } from '../lib/auth.js';

let editStatus = false;
let id = '';
let postForm;
// Función que permite editar un post
const editingPost = (event) => {
  getPost(event.target.dataset.id)
    .then((commentUser) => {
      const post = commentUser.data().txtMascotiemos;
      postForm.txtMascotiemos.value = post;
      editStatus = true;
      id = event.target.dataset.id;
    });
};
// Función que permite dar like a un post
const likePost = (event) => {
  const postId = event.target.dataset.id;
  const currentUserEmail = auth.currentUser.email;
  getPost(postId).then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      const likes = data.likes || [];
      if (likes.includes(currentUserEmail)) {
        dislike(postId, currentUserEmail);
      } else {
        like(postId, currentUserEmail);
      }
    }
  });
};
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
  postForm = section.querySelector('#post-form');
  const postContainer = section.querySelector('#containerPost');
  const readPost = (posts) => {
    let html = '';
    posts.forEach((docs) => {
      const publication = docs.data;
      const ownerId = publication.userId;
      const currentUser = auth.currentUser;
      if (ownerId === currentUser.uid) {
        html += `
        <div class="containerMain">
          <p id="textPost" class="textPost">${publication.txtMascotiemos}</p>
          <section class="containerButtons">
            <button id="btnDelete"  class="btnDelete" data-id="${docs.id}">🗑️</button>
            <button id="btnEdit" class="btnEdit" data-id="${docs.id}">✍️</button>
            <button id="btnLike" class="btnLike" data-id="${docs.id}">🐾</button>
            <p class="count">${publication.likes.length || ''}</p>
          </section>
        </div>
        `;
      } else {
        html += `
        <div class="containerMain">
          <p id="textPost" class="textPost">${publication.txtMascotiemos}</p>
          <section class="containerButtons">
            <button id="btnLike" class="btnLike" data-id="${docs.id}">🐾</button>
            <p class="count">${publication.likes.length || ''}</p>
          </section>
        </div>
        `;
      }
    });
    html += `
      <section class="modal">
        <div class="containerModal">
          <p class="modalTitle">¿Desea eliminar el post?</p>
          <div class="containerBtnsModal">
            <button id="btnCancel" class="btnCancel"> Cancelar </button>
            <button id="btnConfirm" class="btnConfirm"> Confirmar </button>
          </div>
        </div>
      </section>`;
    postContainer.innerHTML = html;
    const modal = postContainer.querySelector('.modal');
    const modalDelete = () => {
      const btnsDelete = postContainer.querySelectorAll('.btnDelete');
      const btnConfirm = postContainer.querySelector('.btnConfirm');
      const btnCancel = postContainer.querySelector('.btnCancel');
      btnsDelete.forEach((btnDelete) => {
        btnDelete.addEventListener('click', (event) => {
          const postId = event.target.dataset.id;
          modal.classList.add('modal--show');
          btnConfirm.addEventListener('click', () => {
            deletePost(postId);
            modal.classList.remove('modal--show');
          });
          btnCancel.addEventListener('click', () => {
            modal.classList.remove('modal--show');
          });
        });
      });
    };
    modalDelete(section);
    // Botón para eliminar un post y llamar la función que elimina el post
    // Botón para editar post y llamar la función que edita el post
    const btnsEdit = postContainer.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', editingPost);
    });
    // Boton para dar like a post y llamar la función que permite dar like
    const btnsLike = postContainer.querySelectorAll('.btnLike');
    btnsLike.forEach((btn) => {
      btn.addEventListener('click', likePost);
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
    postForm.reset(); // Limpia el textarea
  });
  return section;
}
