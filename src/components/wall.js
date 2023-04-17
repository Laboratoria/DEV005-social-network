function wall(navigateTo) {
  const sectionWall = document.createElement('section');
  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = '¡Bienvenida a KittyBook!';
  const msg = document.createElement('p');
  msg.textContent = 'Este sitio está en construcción. Esperamos verte pronto';

  const btnReturnH = document.createElement('button');
  btnReturnH.className = 'return';
  btnReturnH.textContent = 'Volver a inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  sectionWall.append(welcomeMsg, msg, btnReturnH);

  return sectionWall;
}

export default wall;
