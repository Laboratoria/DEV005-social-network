function wall(navigateTo) {
  const sectionWall = document.createElement('section');
  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = '¡Bienvenida a KittyBook!';

  const btnReturnH = document.createElement('button');
  btnReturnH.textContent = 'Volver a inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  sectionWall.append(welcomeMsg, btnReturnH);

  return sectionWall;
}

export default wall;
