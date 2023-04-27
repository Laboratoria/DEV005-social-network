import { submitForm } from '../lib/auth';

function muro(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  title.textContent = 'Muro';
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'inicio';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const article = document.createElement('article');
  article.classList.add('postcard', 'blue');

  const img = document.createElement('img');
  img.classList.add('postcard__img');
  img.src = 'https://picsum.photos/id/237/200/300';

  const postcardText = document.createElement('div');
  postcardText.classList.add('postcard__text');

  const postTitle = document.createElement('h2');
  postTitle.classList.add('postcard__title');

  const postTitleLink = document.createElement('a');
  postTitleLink.textContent = 'COLMILLO';

  postTitle.appendChild(postTitleLink);

  const postSubtitle = document.createElement('div');
  postSubtitle.classList.add('postcard__subtitle');

  const postAge = document.createElement('span');
  postAge.textContent = '1 año';

  postSubtitle.appendChild(postAge);

  const postBar = document.createElement('div');
  postBar.classList.add('postcard__bar');

  const postPreview = document.createElement('div');
  postPreview.classList.add('postcard__preview-txt');
  postPreview.textContent = 'Es un perrito muy sano, activo, sociable, leal, juguetón y sobre todo dispuesto a encontrar una familia amorosa y responsable que lo cuide por el resto de sus días y no le vuelvan a partir su corazón.';

  postcardText.append(postTitle, postSubtitle, postBar, postPreview);

  article.append(img, postcardText);

  const container = document.createElement('div');
  container.classList.add('container');
  container.append(title, article, buttonReturn);

  section.append(container);

  // prueba post
  const taskContainer = document.createElement('div');
  taskContainer.id = 'task-container';

  // Crea el formulario
  const form = document.createElement('form');
  form.id = 'formPost';

  // Crea el campo de título
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Título:';
  const titleInput = document.createElement('input');
  titleInput.classList.add('task-title');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleLabel.appendChild(titleInput);

  // Crea el campo de descripción
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Descripción:';
  const descriptionInput = document.createElement('textarea');
  descriptionInput.classList.add('task-description');
  descriptionInput.name = 'description';
  descriptionLabel.appendChild(descriptionInput);

  //modal

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');
    const text = document.createElement('span');
    text.textContent = 'Completa todos los campos para postear';
    const close = document.createElement('button');
    close.setAttribute('button', 'closeModal-b')
    close.textContent = 'Cerrar';
    modalContent.append(text, close);
    modal.appendChild(modalContent);

    function showModal (){
    modal.style.display = 'block';
  close.addEventListener('click', function() {
  modal.style.display = 'none';
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal){
      modal.style.display = "none";
    }
  });
}

  // Crea el botón de envío
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Enviar';
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //Para no admitir un post vacío
    if (titleInput.value === '' || descriptionInput.value === ''){
      section.append(modal);
      showModal();
    } else {
      submitForm(e);
    }
  });

  // Agrega los elementos al formulario
  form.appendChild(titleLabel);
  form.appendChild(descriptionLabel);
  form.appendChild(submitBtn);

  // Crea la sección de tareas
  const taskList = document.createElement('ul');
  taskList.id = 'task-list';

  // Agrega el formulario y la sección de tareas al contenedor de tareas
  taskContainer.appendChild(form);
  taskContainer.appendChild(taskList);

  // Agrega el contenedor de tareas a la página
  document.body.appendChild(taskContainer);

  // Agrega un EventListener para el envío del formulario

  return section;
}

export default muro;
