import {
  submitForm, deleteTask, onGetTasks, getTask, getCurrentUserId, getEmail, updateTask,
} from '../lib/posts';

import { getAuth, signOut } from 'firebase/auth';



function muro(navigateTo) {

  const section = document.createElement('section');
  const divTitleAndReturn = document.createElement('div');
  divTitleAndReturn.className = 'div-title-return';
  const title = document.createElement('h1');
  title.textContent = '🐾 Patitas.com';
  title.className= 'title-wall';
  const session = document.createElement('h5');
  session.className = 'mail-login'
  const sessionOn = getEmail();
  session.textContent = sessionOn;
  const buttonReturn = document.createElement('button');
  buttonReturn.className = 'button-return-home';
  const iconLogOut = document.createElement('i');
  iconLogOut.className = 'fa-solid fa-right-from-bracket';
  iconLogOut.style.color= '#635994';
  divTitleAndReturn.append(title, buttonReturn);
  buttonReturn.appendChild(iconLogOut);
  buttonReturn.addEventListener('click', () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear(); // borra los datos del usuario
        history.replaceState(null, '', '/'); // limpia el historial del navegador
        navigateTo('/');
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const container = document.createElement('div');
  container.classList.add('container');

  // prueba post
  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';

  // Formulario posts
  const form = document.createElement('form');
  form.id = 'formPost';

  const divFormName = document.createElement('div');
  divFormName.className = 'div-form-name';

  const titleInput = document.createElement('input');
  titleInput.placeholder = 'Ingrese un título';
  titleInput.classList.add('task-input-title');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.setAttribute("autocomplete", "off");
  divFormName.append(titleInput);

  const divFormGender = document.createElement('div');
  divFormGender.className = 'div-form-gender';

  const genderFemale = document.createElement('input');
  genderFemale.type = 'radio';
  genderFemale.id = 'female-id';
  genderFemale.value = 'Hembra';
  genderFemale.name = 'radiobuttons';
  const labelFemale = document.createElement('label');
  labelFemale.setAttribute = ('for', 'female-id');
  labelFemale.className ='female-id-label'
  labelFemale.textContent = 'Hembra';
  const genderMale = document.createElement('input');
  genderMale.type = 'radio';
  genderMale.id = 'male-id';
  genderMale.value = 'Macho';
  genderMale.name = 'radiobuttons';
  const labelMale = document.createElement('label');
  labelMale.setAttribute = ('for', 'male-id');
  labelMale.className = 'male-id-label';
  labelMale.textContent = 'Macho';

  divFormGender.append(genderFemale, labelFemale, genderMale, labelMale);

  const divFormAge = document.createElement('div');
  divFormAge.className = 'div-form-age';
  const ageLabel = document.createElement('label');
  ageLabel.textContent = 'Edad (años):';
  ageLabel.className = 'age-label-pets';
  const ageInput = document.createElement('input');
  ageInput.max='25';
  ageInput.min ='0'
  ageInput.value = '0';
  ageInput.type= 'number';
  ageInput.classList.add('task-age');
  ageInput.name = 'age';
  ageInput.setAttribute("autocomplete", "off");
  divFormAge.append(ageLabel, ageInput);

  const descriptionInput = document.createElement('textarea');
  descriptionInput.addEventListener("input", function() {
    autoResize(this);
  });
  descriptionInput.placeholder = 'Ingrese la descripción';
  descriptionInput.classList.add('task-description');
  descriptionInput.name = 'description';
  descriptionInput.setAttribute("autocomplete", "off");

  function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  // modal post
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  const modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  const text = document.createElement('span');
  text.className = 'text-modal';
  text.textContent = '';
  const close = document.createElement('button');
  close.setAttribute('class', 'closeModal-b');
  close.textContent = 'Cerrar';
  modalContent.append(text, close);
  modal.appendChild(modalContent);

  function showModal(mensaje) {
    modal.style.display = 'block'
    text.textContent = mensaje;
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Crea el botón de envío formulario
  const submitBtn = document.createElement('button');
  submitBtn.id = 'btnSend';
  submitBtn.type = 'submit';
  submitBtn.className = 'send-b';
  submitBtn.textContent = 'Enviar';
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleInput.value === '' || descriptionInput.value === '' ) {
      section.append(modal);
      showModal('Completa todos los campos para enviar');
    } else {
      const editStatus = submitBtn.textContent !== 'Enviar';
      const editPostId = submitBtn.getAttribute('data-editpostid');
      submitForm(editStatus, editPostId);
    }
  });

  // Agrega los elementos al formulario
  form.append(divFormName, divFormGender, divFormAge, descriptionInput, submitBtn);

  // Crea la sección de tareas
  const taskList = document.createElement('div');
  taskList.id = 'task-list';

  document.body.append(form, taskList);


  onGetTasks((querySnapshot) => {
    taskList.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      //para obtener la fecha y hora del servidor de firebase en formato legible
      if (task && task.date){
      const dateObj = task.date.toDate();
      const day = dateObj.getDate().toString().padStart(2, '0');
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const year = dateObj.getFullYear();
      const hour = dateObj.getHours();
      const min = dateObj.getMinutes().toString().padStart(2, '0');
      const formattedDate = ` ${day}-${month}-${year}, ${hour}:${min}` ;
      const taskTitle = task.taskTitle;
      const taskDescription = task.taskDescription;
      const taskGender = task.taskGender;
      const taskAge = task.taskAge;
      const userId = getCurrentUserId();
      const owner = task.owner;
      const isLiked = task.likes.find((id) => id === userId);
      const likeClass = isLiked ? 'fa-solid red-heart' : 'fa-regular black-heart';
      taskList.innerHTML += `<div class='container-post'>
                            <div class= 'title-post'>
                              <h2 class='title-post-wall'>${taskTitle}</h2>
                              <div class='info-post'>
                              <span class= 'date-post'>${owner}</span>
                              <span class='date-post'>${formattedDate}</span>
                              </div>
                            </div>
                            <div class='gender-post'>
                              <span>Genero:&nbsp;</span>
                              <span>${taskGender}</span>
                            </div>
                            <div class='age-post'>
                              <span>Edad:&nbsp;</span>
                              <span>${taskAge}</span>
                            </div>
                            <div class='description-post'
                              <p>${taskDescription}</p>
                            </div>
                            <div class='line'></div>
                            <div class='buttons-post'>
                            <div class='like-div'>
                              <button class='like-button' data-id="${task.id}"><i class="${likeClass} fa-heart"></i></button>
                              <span class='like-count'>${task.likes.length}</span>
                            </div>
                              <button class="edit-button" data-id="${task.id}"><i class="fa-regular fa-pen-to-square"></i></button>
                              <button class="delete-button" data-id="${task.id}"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            </div>`;

      };

      const btnLike = document.querySelectorAll('.like-button');
      btnLike.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const taskId = btn.dataset.id;
          const userId = getCurrentUserId();
          const newPost = await getTask(taskId);
          const isLiked = newPost.likes.find((id) => id === userId);

          if (isLiked) {
            const index = newPost.likes.indexOf(userId);
            newPost.likes.splice(index, 1);
            await updateTask(taskId, newPost);
          } else {
            newPost.likes.push(
              userId,
            );
            await updateTask(taskId, newPost);
          }
        });
      });

      const btnsDelete = document.querySelectorAll('.delete-button');
      btnsDelete.forEach((btnDelete) => {
        btnDelete.addEventListener('click', async (e) => {
          const taskId = btnDelete.dataset.id;

          // Crear modal
          const modal = document.createElement('div');
          modal.classList.add('modal');
          const modalContent = document.createElement('div');
          modalContent.classList.add('modal-content');
          const modalText = document.createElement('span');
          modalText.className = 'text-modal';
          modalText.innerText = '¿Está seguro de que desea eliminar esta publicación?';
          const modalButtons = document.createElement('div');
          modalButtons.classList.add('modal-buttons');
          const confirmButton = document.createElement('button');
          confirmButton.className = 'confirm-delete-b'
          confirmButton.innerText = 'Eliminar';
          confirmButton.addEventListener('click', async () => {
            modal.style.display = 'none'; 
            await deleteTask(taskId);
          });
          const cancelButton = document.createElement('button');
          cancelButton.innerText = 'Cancelar';
          cancelButton.className = 'cancel-delete-b'
          cancelButton.addEventListener('click', () => {
            modal.style.display = 'none';
          });

          window.addEventListener('click', (event) => {
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          });

          modalButtons.appendChild(confirmButton);
          modalButtons.appendChild(cancelButton);

          modalContent.appendChild(modalText);
          modalContent.appendChild(modalButtons);

          modal.appendChild(modalContent);
          document.body.appendChild(modal);

          e.stopPropagation();
        });
      });

      const btnsEdit = document.querySelectorAll('.edit-button');
      btnsEdit.forEach((btnEdit) => {
        btnEdit.addEventListener('click', async (e) => {
          e.preventDefault();
          const taskId = btnEdit.dataset.id;
          const newDoc = await getTask(taskId);
          const newTask = newDoc;

          submitBtn.setAttribute('data-editpostid', taskId);
          form.title.value = newTask.taskTitle;
          form.radiobuttons.value = newTask.taskGender;
          form.age.value = newTask.taskAge;
          form.description.value = newTask.taskDescription;
          const btnTaskForm = document.querySelector('#btnSend');
          btnTaskForm.innerText = 'Actualizar';
        });
      });
    });
  });

  container.append(session, divTitleAndReturn, form, taskList);
  section.appendChild(container);
  return section;
}

export default muro;
