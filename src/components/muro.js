import { getAuth, signOut } from 'firebase/auth';

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
  <i class='bx bx-x'></i>
  <h2>Crear Post</h2>
  <form action="#">
  <div class="content-post">
  <img src="https://i.pinimg.com/236x/55/3a/7c/553a7c1b4c9ce8064cc6ea027bfd21dd.jpg">
  <div class="detail-post">
  <p>Food Match</p>
  <div class="privacy">
  <i class='bx bx-user-pin' ></i>
  <span>amigos</span>
  <i class='bx bx-caret-down'></i>
  </div>
  </div>
  </div>
  <textarea  placeholder="Descripción del post :D"> </textarea>
  <button>Post</button>
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
    alert('pop-up');
  });
  return muroDiv;
};

export default muro;
