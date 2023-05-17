import { async } from 'regenerator-runtime';
import { googleLogout, getUserLogged } from '../lib/auth';
import { validarRutaHome } from '../utilitaries/ruteo';
import { homeTemplate } from '../template/home-template';
import {
  saveTask, getTask, oneGetTask, deleTask, getTasks, updateTask, giveLike,
} from '../lib/firestore';

function home(navigateTo) {

  const sectionHome = document.createElement('section');
  sectionHome.id = 'section-home';
  sectionHome.className = 'section-home';
  sectionHome.innerHTML = '';
  sectionHome.innerHTML = homeTemplate;

  // boton de cerrar sesicion
  const gogleBtn = sectionHome.querySelector('#exitBtn');
  gogleBtn.addEventListener('click', async () => {
    googleLogout();
  });

  // boton para abrir el popup y cerrar
  const openPopup = sectionHome.querySelector('#open-post');
  const closePopup = sectionHome.querySelector('#btnClosePost');
  const containerPopup = sectionHome.querySelector('#backgraund-opacity');

  openPopup.addEventListener('click', () => {
    containerPopup.classList.add('show');
    containerPopup.style.visibility = 'visible';
  });
  closePopup.addEventListener('click', () => {
    containerPopup.classList.remove('show');
    containerPopup.style.visibility = 'hidden';
  });

  // funcion para recibir datos de usuarios y postear
  const box = sectionHome.querySelector('#box-flex');
  const taskForm = sectionHome.querySelector('#task-form');

  const btnTaskForm = sectionHome.querySelector('#btn-task-save');
  const title = sectionHome.querySelector('#task-title');
  const description = sectionHome.querySelector('#task-description');
  let editStatus = false;
  let editTaskId = '';

  // const task = [title, description];
  window.addEventListener('DOMContentLoaded', async () => {
    const section = document.getElementById('section-home');
    oneGetTask((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const tasks = doc.data();
        // console.log(tasks);
        html += `
                <div data-id="${doc.id}" id="task-container" class="task-container">
                  <div class="overlay"></div>
                  <div class="box-profile-post">
                      <div class="title-posts">
                          <div class="image-profile-usuary"><img src="https://i.pinimg.com/564x/d2/9e/52/d29e52c8cfec7320b1fe09c8421c4156.jpg"></div>
                          <span class="name-usuary">${tasks.user.email}</span>
                      </div>
                      <div id="botones" class="text-select">
                              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                              <div class="box-button-selct">
                                <button id="btn-edit" class="btn-edit">edit</button>
                                <button class="btn-delete" id="btn-delete">delete</button>
                              </div>
  
                      </div>
                  </div>
                  <div class="box-result">
                      <div class="result-title">${tasks.title}</div>
                      <div class="result-comment">${tasks.description}</div>
                  </div>
                  <div class="box-likes">
                  <button class="btn-like" id="btn-like">likes</button>
                  <p class="number-like" id="number-like">2</p>
                  </div>
              </div>
          `;
      });
      box.innerHTML = html;
      const taskCard = section.querySelectorAll('.task-container');
      const likeButtons = section.querySelectorAll('.btn-like');
      const likeCounts = section.querySelectorAll('.number-like');

      taskCard.forEach((card, index) => {
        const id = card.getAttribute('data-id');
        const foo = async () => {
          const doc = await getTasks(id);
          const task = doc.data();
          console.log('Task: ', task);

          const botones = card.querySelector('#botones');
          const btnDelete = card.querySelector('#btn-delete');
          const btnEdit = card.querySelector('#btn-edit');

          // funcion de likes
          likeButtons[index].addEventListener('click', (e) => {
            e.preventDefault();
            const callback = (likes) => {
              console.log('numberLikes: ', likeCounts[index]);
              likeCounts[index].textContent = `likes: ${likes}`;
            };
            giveLike(id, getUserLogged().email, callback);
          });

          // validacion del perfil
          if (getUserLogged().email === task.user.email) {
            botones.style.display = 'block';
            btnEdit.addEventListener('click', () => {
              title.value = task.title;
              description.value = task.description;
              editStatus = true;
              editTaskId = doc.id;
              btnTaskForm.innerText = 'update';
            });
            btnTaskForm.innerText = 'Post';
            btnDelete.addEventListener('click', ({ target: { dataset } }) => {
              deleTask(dataset.id);
            });
          } else {
            botones.style.display = 'none';
          }
        };
        foo();
      });
    });
  });
  // lee el lenguaje
  btnTaskForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (!editStatus) {
      saveTask(title.value, description.value, getUserLogged());
    } else {
      updateTask(editTaskId, {
        title: title.value,
        description: description.value,
      });

      editStatus = false;
    }
    taskForm.reset();
  });

  // rutas de validacion
  validarRutaHome(navigateTo, (isLogged) => {
    if (isLogged) {}
  });
  return sectionHome;
}

export default home;
