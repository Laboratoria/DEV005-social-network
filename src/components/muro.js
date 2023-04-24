import { getAuth, signOut } from 'firebase/auth';
import {
  saveTask,
  onGetTasks,
  deleteTask,
} from '../lib/firebaseConfig.js';

const muro = (navigateTo) => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';

  muroDiv.innerHTML = '';
  muroDiv.innerHTML += `
  <header>
    <nav class='navbar'>
      <img class='img_food'>
      <div class='icon_exit'></div>
    </nav>
  </header>
  <main>
  
  <div class='create-post'> 
    <button class='open-popup'>¿Qué receta quieres compartir hoy?</button>
  </div>
  <div class='pop-up' id='pop-up'>
    <div class='wrapper'>
      <section class='post'>
        <button class='cerrar-post'><i class='bx bx-x'></i></button>
        <form action='#' class='form-post' id='form-post'>
          <h2>Crear Post</h2>
            <div class='content-post'>
              <div class='detail-post'>
                <p>Food Match</p>
                  <div class='privacy'>
                    <i class='bx bx-user-pin' ></i>
                    <span>amigos</span>
                    <i class='bx bx-caret-down'></i>
                  </div>
              </div>
            </div>
          <textarea id='textarea-post' placeholder='Descripción del post :D'> </textarea>
          <button class='publicar-post' type='submit' >Post</button>
        </form>
      </section>
    </div>
  </div>
  <div id='tasks-container' class='tasks-container'></div>
  </main>
  `;
  // boton salida
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
    window.addEventListener('click', (e) => { // windoow??
      if (e.target === popUp) {
        popUp.style.display = 'none';
      }
    });
  });
  // contenedor publicaciones (mostrar datos)
  const tasksContainer = muroDiv.querySelector('.tasks-container');
  window.addEventListener('DOMContentLoaded', async () => {
    // consulta asíncrona
    // querySnapshot -> los datos que existen en este momento
    // ejecutar con promesa o callback

    // cuando ocurra un cambio en la base de datos de post
    // voy a recibir los datos nuevos voy a crear el html  y recorrer los datos
    // para verlo y luego pintamos el html y luego lo ponemos dentro del task container
    onGetTasks((querySnapshot) => {
      let html = '';
      // por cada documento quiero ver por consola el documento
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
        <!--<div class="publicaciones">
              <button class='btn-menu'><i class='bx bx-dots-horizontal-rounded'></i></button>
              <div class='container-options'>
              <button class='btn-delete' data-id="${doc.id}">Eliminar</button>
              <button class='btn-edit'>Editar</button>
              </div>
                  <p>${task.description}</p>
              </div>-->
              <button class='btn-delete' data-id="${doc.id}">Eliminar</button>
              <button class='btn-edit'>Editar</button>
              <p>${task.description}</p>
          `;
      });
      // en el parametro event se puede resumir debido a todos los elementos son objetos, esto de la isguiente forma ({target: {dataset}})
      tasksContainer.innerHTML = html;
      const btnDelete = tasksContainer.querySelectorAll('.btn-delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          deleteTask(event.target.dataset.id);
        });
      });
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
