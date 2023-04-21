import { getAuth, signOut } from 'firebase/auth';
import { saveTask, getTask } from '../lib/firebaseConfig.js';

const muro = (navigateTo) => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';

  muroDiv.innerHTML = '';
  muroDiv.innerHTML += `
  <header>
  <nav class='navbar'>
  <img class='img_food'>
  <div class='icon_exit'>
  </div>
  </nav>
  </header>

  <main>
  <div class='create-post'> 
  <button class='open-popup'>¿Qué receta quieres compartir hoy?</button>
  </div>

  <div class='pop-up' id='pop-up'>
  <div class="wrapper">
  <section class="post">
  
  <form action="#" class="form-post" id="form-post">
  <button class="cerrar-post"><i class='bx bx-x'></i></button>
  <h2>Crear Post</h2>
  <div class="content-post">
  <div class="detail-post">
  <p>Food Match</p>
  <div class="privacy">
  <i class='bx bx-user-pin' ></i>
  <span>amigos</span>
  <i class='bx bx-caret-down'></i>
  </div>
  </div>
  </div>
  <textarea id="textarea-post" placeholder="Descripción del post :D"> </textarea>
  <button class="publicar-post" type="submit" >Post</button>
  </form>
  </section>
  </div>
  </div>
  </main>
  `;

  const iconExit = muroDiv.querySelector('.icon_exit');
  iconExit.addEventListener('click', () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  });

  const openPopup = muroDiv.querySelector('.open-popup');
  openPopup.addEventListener('click', () => {
    const popUp = muroDiv.querySelector('.pop-up');
    const button = muroDiv.querySelector('.open-popup');
    const cerrarPost = muroDiv.querySelector('.cerrar-post');
    button.addEventListener('click', () => {
      popUp.style.display = 'block';
    });
    cerrarPost.addEventListener('click', () => {
      popUp.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === popUp) {
        popUp.style.display = 'none';
      }
    });
  });

  window.addEventListener('DOMContentLoaded', async () => {
    // consulta asíncrona
    // querySnapshot -> los datos que existen en este momento
    // ejecutar con promesa o callback
    const querySnapshot = await getTask();
    console.log(querySnapshot);
    // por cada documento quiero ver por consola el documento
    querySnapshot.forEach(doc => {
      console.log(doc.data());
});
  });

  const formPost = muroDiv.querySelector('.form-post');
  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('enviado');
    const description = formPost['textarea-post'].value;
    // console.log(description);
    saveTask(description);
    formPost.reset();
  });
  return muroDiv;
};

export default muro;
