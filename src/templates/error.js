function error() {
  const mensaje = document.createElement('h2');
  mensaje.textContent = 'Pagina no encontrada 404 ir al inicio <a href="/">click</a>';
  return mensaje;
}

export default error;
