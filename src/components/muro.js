import { getAuth, signOut } from 'firebase/auth';
import {
  saveTask,
  onGetTasks,
  deleteTask,
  editTasks,
  updateTask,
} from '../lib/firebaseConfig.js';

let editStatus = false;
let id = '';

const muro = (navigateTo) => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';

  muroDiv.innerHTML = '';
  muroDiv.innerHTML += `
  <header>
  <nav class='navbar'>
  <div class='img_food' ></div>
  <h2>Food Match</h2>
  <div class='icon_exit' type='button'></div>
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
  <button class='publicar-post' type='submit' >Guardar</button>
  </form>

  </section>
  </div>
  </div>

  <div id='tasks-container' class='tasks-container'></div>
  </main>
  `;

  // botón salida
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

  const interacionPopUp = () => {
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
  };

  interacionPopUp();

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
        <div class='publicaciones'>

        <div class='dropdown'>
        <button class='btn-menu'><i class='bx bx-dots-horizontal-rounded'></i></button>
        <div class='container-options'>
        <button class='btn-delete' data-id='${doc.id}'>Eliminar</button>
        <button class='btn-edit' data-id='${doc.id}'>Editar</button>

        </div>
        </div>
            <p>${task.description}</p>
            <i class='bx bx-heart'></i> <span> 1.7K</span>
            <i class='bx bx-message-square-dots'></i> <span> 1.7K</span>
        </div>
          `;
      });

      // en el parametro event se puede resumir debido a q todos
      // los elementos son objetos, esto es de la siguiente manera:
      // ({target: {dataset}})
      tasksContainer.innerHTML = html;
      const btnDelete = tasksContainer.querySelectorAll('.btn-delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          deleteTask(event.target.dataset.id);
        });
      });

      const btnEdit = tasksContainer.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          const cerrarPost = muroDiv.querySelector('.cerrar-post');
          const popUp = muroDiv.querySelector('.pop-up');
          popUp.style.display = 'block';
          cerrarPost.addEventListener('click', () => {
            popUp.style.display = 'none';
          });
          window.addEventListener('click', (e) => { // windoow??
            if (e.target === popUp) {
              popUp.style.display = 'none';
            }
          });
          const docEdit = await editTasks(event.target.dataset.id);
          console.log(docEdit);
          const taskEdit = docEdit.data();
          const formPost = muroDiv.querySelector('.form-post');
          formPost['textarea-post'].value = taskEdit.description;
          editStatus = true;
          id = event.target.dataset.id;
        });
      });
    });
  });

  const formPost = muroDiv.querySelector('.form-post');
  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = formPost['textarea-post'].value;
    // console.log(description);
    if (!editStatus) {
      saveTask(description);
    } else {
      updateTask(id, { description });
      editStatus = false;
    }
  });
  return muroDiv;
};

export default muro;
