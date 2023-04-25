/* eslint-disable import/named
import { currentUserNow } from '../lib/auth.js'; */

// pantalla - error
function mistake(navigateTo) {
  const bug = document.createElement('div');
  bug.innerHTML = `<section class="errorSection"><img class="imgBug" src="../lib/img/error404.png">
  <h2 class="text"> Error 404: página no encontrada.</h2>
  <botton class="initButton"> <u>volver al Inicio</u> <botton>
  </section>`;

  const keep = bug.querySelector('.initButton');
  keep.addEventListener('click', () => {
    // const user = currentUserNow();
    // console.log(user);
    // // eslint-disable-next-line no-unused-expressions
    // user ? navigateTo('/emprende') : navigateTo('/');
  });
  return bug;
}

export {
  mistake,
};
