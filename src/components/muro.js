const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';
  const bienvenida = document.createElement('h2');
  bienvenida.textContent = 'Bienvenido';

  muroDiv.appendChild(bienvenida);
  return muroDiv;
};

export default muro;
