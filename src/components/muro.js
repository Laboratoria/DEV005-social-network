const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';

  muroDiv.innerHTML = '';
  muroDiv.innerHTML += `
  <header>
  <nav class="navbar">
  <img class="img_food">
  <div class="icon_exit">
  </div>
  </nav>
  </header>

  <main>
  <div class="create-post"> 
  <button class="open-popup">¿Qué receta quieres compartir hoy?</button>
  </div>
  </main>
  `;

  const iconExit = muroDiv.querySelector('.icon_exit');
  iconExit.addEventListener('click', () => {
    alert('Saliendo del aplicativo eventarget');
  });

  const openPopup = muroDiv.querySelector('.open-popup');
  openPopup.addEventListener('click', () => {
    alert('pop-up');
  });
  return muroDiv;
};

export default muro;
