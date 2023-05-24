import { async } from 'regenerator-runtime';
import { googleLogout, getUserLogged } from '../lib/auth';
import { validarRutaHome } from '../utilitaries/ruteo';
import { homeTemplate } from '../template/home-template';
import {
  saveTask, oneGetTask, deleTask, getTasks, updateTask, giveLike,
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

  const openPopup = sectionHome.querySelector('#open-post');
  const closePopup = sectionHome.querySelector('#btnClosePost');
  const containerPopup = sectionHome.querySelector('#backgraund-opacity');

  // funcion para recibir datos de usuarios y postear
  const box = sectionHome.querySelector('#box-flex');
  const taskForm = sectionHome.querySelector('#task-form');
  const BoxEmpty = sectionHome.querySelector('#parrafo');

  const btnTaskForm = sectionHome.querySelector('#btn-task-save');
  const title = sectionHome.querySelector('#task-title');
  const description = sectionHome.querySelector('#task-description');
  let editStatus = false;
  let editTaskId = '';

  const onOpenPopup = () => {
    containerPopup.classList.remove('hidden');
    containerPopup.classList.add('show', 'show-popup');
    if (editStatus === true) {
      btnTaskForm.innerText = 'Update';
    } else {
      btnTaskForm.innerText = 'Post';
    }
    BoxEmpty.style.display = 'none';
  };
  const onClosePopup = () => {
    containerPopup.classList.remove('show', 'show-popup');
    containerPopup.classList.add('hidden');
  };

  // boton para abrir el popup y cerrar
  openPopup.addEventListener('click', () => {
    editStatus = false;
    onOpenPopup();
    taskForm.reset();
  });
  closePopup.addEventListener('click', () => {
    editStatus = false;
    onClosePopup();
  });

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
                          <div class="image-profile-usuary"><img src="../img/Laboratoria projects 6 6.png"></div>
                          <span class="name-usuary" id="email">${tasks.user.email}</span>
                      </div>
                      <div id="botones" class="text-select">
                              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                              <div class="box-button-selct">
                                <button data-id="" id="btn-edit" class="btn-edit">edit</button>
                                <button data-id="" class="btn-delete" id="btn-delete">delete</button>
                              </div>
  
                      </div>
                   </div>
                  <div class="box-result">
                      <div class="result-title" id="title">${tasks.title}</div>
                      <div class="result-comment" id="description">${tasks.description}</div>
                  </div>
                  <div class="box-likes">
                  <div class="btn-like" id="btn-like"></div>
                  <p class="number-like" id="number-like" style="background-color:${tasks.like.length === 0 ? 'red' : 'blue'}"></p>
                  </div>
              </div>
          `;
      });
      box.innerHTML = html;

      const taskCard = section.querySelectorAll('.task-container');

      taskCard.forEach((card) => {
        const id = card.getAttribute('data-id');
        const foo = async () => {
          const doc = await getTasks(id);
          const task = doc.data();
          console.log('Task: ', task);

          const cardEmail = card.querySelector('#email');
          const cardTitle = card.querySelector('#title');
          const cardDescription = card.querySelector('#description');
          const cardBtnLike = card.querySelector('#btn-like');
          const cardLikes = card.querySelector('#number-like');

          const botones = card.querySelector('#botones');
          const btnDelete = card.querySelector('#btn-delete');
          const btnEdit = card.querySelector('#btn-edit');

          cardEmail.textContent = `${task.user.email}`;
          cardTitle.textContent = `${task.title}`;
          cardDescription.textContent = `${task.description}`;
          cardLikes.textContent = `likes: ${task.like.length}`;

          // funcion de likes
          cardBtnLike.addEventListener('click', (e) => {
            e.preventDefault();
            const callback = (likes, giveLikeMode) => {
              cardLikes.textContent = `LIKES: ${likes}`;
              console.log('numberLikes: ', cardLikes);
              if (giveLikeMode === 'ADD_LIKE') {
                cardLikes.style.color = 'pink';
                console.log('Dio like: ', giveLikeMode);
              } else {
                console.log('Quito like: ', giveLikeMode);
              }
            };
            giveLike(id, getUserLogged().email, callback);
          });

          // validacion del perfil
          if (getUserLogged().email === task.user.email) {
            botones.style.display = 'block';
            btnEdit.addEventListener('click', (e) => {
              e.preventDefault();
              title.value = task.title;
              description.value = task.description;
              editStatus = true;
              editTaskId = doc.id;
              onOpenPopup();
              btnTaskForm.addEventListener('click', () => {
                btnTaskForm.preventDefault();
                closePopup();
              });
            });
            btnTaskForm.innerText = 'Post';
            btnDelete.addEventListener('click', ({ target: { dataset } }) => {
              if (window.confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
                // Si el usuario confirma, realizar la acción de eliminación
                deleTask(dataset.id);
              } else {
                console.log('eliminar datos');
              }
            });
          } else {
            botones.style.display = 'none';
          }
        };
        foo();
      });
    });
  });
  // lee el lhtml de posteat
  btnTaskForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value.trim() === '' && description.value.trim() === '') {
      BoxEmpty.textContent = 'the field title and description is empty';
      BoxEmpty.style.color = 'red';
      BoxEmpty.style.display = 'block';
      e.stopPropagation();
      console.log('llego hasta aqui');
      return;
    }
    if (title.value.trim() === '') {
      BoxEmpty.textContent = 'the field title is empty';
      BoxEmpty.style.color = 'red';
      BoxEmpty.style.display = 'block';
      e.stopPropagation();
      console.log('llego hasta aqui');
      return;
    }
    if (description.value.trim() === '') {
      BoxEmpty.textContent = 'the field description is empty';
      BoxEmpty.style.color = 'red';
      BoxEmpty.style.display = 'block';
      e.stopPropagation();
      console.log('llego hasta aqui');
      return;
    }
    if (!editStatus) {
      btnTaskForm.disabled = true;
      saveTask(title.value, description.value, getUserLogged());
    } else {
      updateTask(editTaskId, {
        title: title.value,
        description: description.value,
      });

      editStatus = false;
    }
    containerPopup.classList.remove('show');
    containerPopup.style.visibility = 'hidden';
    taskForm.reset();
  });

  // rutas de validacion
  validarRutaHome(navigateTo, (isLogged) => {
    if (isLogged) {}
  });
  return sectionHome;
}

export default home;
