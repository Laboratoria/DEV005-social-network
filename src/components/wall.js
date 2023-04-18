function wall(navigateTo) {
  const sectionWall = document.createElement('section');
  sectionWall.id = 'wall-section';
  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = '¡Bienvenida a KittyBook!';
  const msg = document.createElement('p');
  msg.textContent = 'Este sitio está en construcción. Esperamos verte pronto';

  const kittyImage = document.createElement('img');
  kittyImage.src = '/images/working-cat.png';
  kittyImage.alt = 'Working kitty';
  kittyImage.width = 350;
  kittyImage.height = 270;

  const btnReturnH = document.createElement('button');
  btnReturnH.className = 'return';
  btnReturnH.textContent = 'Volver a inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  sectionWall.append(welcomeMsg, msg, btnReturnH, kittyImage);

  return sectionWall;
}

export default wall;
