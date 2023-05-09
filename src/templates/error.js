function error() {
  const message = document.createElement('span');
  message.textContent = 'Pagina no encontrada 404 ir al inicio <a href="/">click</a>';
  return message;
}

export default error;
