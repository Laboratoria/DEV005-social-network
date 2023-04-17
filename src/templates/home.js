import {
  savePost,
  getPosts,
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
        <textarea type="text" name="txtMascotiemos" class="txtMascotiemos" id="TxtMascotiemos" rows="3" placeholder="Mascotiemos..."></textarea> 
        <button id="btnPost class="btnPost><!--<img class="btnPostImg" src="./img/btnPublicar.png" alt="ost"></img>--> Publicar </button>
        
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

  window.addEventListener('DOMContentLoaded', () => {
    const querySnapshot = getPosts(); // querySnapshot (datos que existen en el momento)

    let html = '';

    querySnapshot.forEach((doc) => {
      const publication = doc.data();
      html += `
        <div>
          <p>${publication.post}</p>
        </div>
      `;
    });

    postContainer.innerHTML = html;
  });

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const post = postForm.txtMascotiemos;

    savePost(post.value);

    postForm.reset(); // Limpia el textarea
  });

  return section;
}
