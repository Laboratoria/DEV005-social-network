// pantalla - error
function mistake(navigateTo) {
  const bug = document.createElement('div');
  bug.innerHTML = `<section class="errorSection"><img class="imgBug" src="https://firebasestorage.googleapis.com/v0/b/social-network-dev-005.appspot.com/o/assets%2Ferror404.png?alt=media&token=5e668610-1110-46fb-aa9e-0d995a44c8d3">
  <h2 class="text"> Error 404: página no encontrada.</h2>
  <button class="initButton"> <u>volver al Inicio</u> <button>
  </section>`;

  const keep = bug.querySelector('.initButton');
  keep.addEventListener('click', () => {
    navigateTo('/');
  });
  return bug;
}

export {
  mistake,
};
