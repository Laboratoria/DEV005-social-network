import {
  submitForm, deleteTask, onGetTasks, getTask,
} from '../lib/posts';

function muro(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  title.textContent = '🐾 Patitas.com';
  title.className= 'title-wall';
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'inicio';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
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
  labelFemale.textContent = 'Hembra';

  const genderMale = document.createElement('input');
  genderMale.type = 'radio';
  genderMale.id = 'male-id';
  genderMale.value = 'Macho';
  genderMale.name = 'radiobuttons';
  const labelMale = document.createElement('label');
  labelMale.setAttribute = ('for', 'male-id');
  labelMale.textContent = 'Macho';

  divFormGender.append(genderFemale, labelFemale, genderMale, labelMale);

  const divFormAge = document.createElement('div');
  divFormAge.className = 'div-form-age';
  const ageLabel = document.createElement('label');
  ageLabel.textContent = 'Edad (años):';
  ageLabel.className = 'age-label-pets';
  const ageInput = document.createElement('input');
  ageInput.value = '0';
  ageInput.type= 'number';
  ageInput.classList.add('task-age');
  ageInput.name = 'age';
  ageInput.setAttribute("autocomplete", "off");
  divFormAge.append(ageLabel, ageInput);

/*   const divFormDescription = document.createElement('div');
  divFormDescription.className = 'div-form-description'; */
  /* const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Descripción:';
  descriptionLabel.className = 'description-label-pets'; */
  const descriptionInput = document.createElement('input');
  descriptionInput.placeholder = 'Ingrese la descripción';
  descriptionInput.classList.add('task-description');
  descriptionInput.name = 'description';
  descriptionInput.setAttribute("autocomplete", "off");
/*   divFormDescription.append( descriptionLabel, descriptionInput); */

  // modal post
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  const modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  const text = document.createElement('span');
  text.textContent = '';
  const close = document.createElement('button');
  close.setAttribute('button', 'closeModal-b');
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
  submitBtn.className = 'send-b'
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
      const taskTitle = task.taskTitle;
      const taskDescription = task.taskDescription;
      const taskGender = task.taskGender;
      const taskAge = task.taskAge;
      taskList.innerHTML += `<div class='container-post'>
                            <div class= 'title-post'>
                              <h2>${taskTitle}</h2>
                            </div>
                            <div class='gender-post'>
                              <span>Genero:</span>
                              <span>${taskGender}</span>
                            </div>
                            <div class='age-post'>
                              <span>Edad:</span>
                              <span>${taskAge}</span>
                            </div>
                            <div class='description-post'
                              <p>${taskDescription}</p>
                            </div>
                            <div class='buttons-post'>
                              <button class='like-button'><i class="fa-regular fa-heart"></i></button>
                              <button class="edit-button" data-id="${task.id}"><i class="fa-regular fa-pen-to-square"></i></button>
                              <button class="delete-button" data-id="${task.id}"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            </div>`;

                            //codigo para que el corazon se pinte al poner me gusta: <i class="fa-solid fa-heart" style="color: #e80005;"></i>

      const btnsDelete = document.querySelectorAll('.delete-button');
      btnsDelete.forEach((btnDelete) => {
        btnDelete.addEventListener('click', async (e) => {
          const taskId = btnDelete.dataset.id;
          await deleteTask(taskId);
        });
      });

      const btnsEdit = document.querySelectorAll('.edit-button');
      btnsEdit.forEach((btnEdit) => {
        btnEdit.addEventListener('click', async (e) => {
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

  container.append(title, form, taskList, buttonReturn);
  section.appendChild(container);
  return section;
}

export default muro;
