// pantalla - error
function mistake(navigateTo) {
  const bug = document.createElement('div');
  bug.innerHTML = `<section class="errorSection"><img class="imgBug" src="../lib/img/error404.png">
  <h2 class="text"> Error 404: página no encontrada.</h2>
  <botton class="initButton"> <u>volver al Inicio</u> <botton>
  </section>`;

  const keep = bug.querySelector('.initButton');
  keep.addEventListener('click', () => {
    navigateTo('/mainScreen');
  });
  return bug;
}

export {
  mistake,
};
