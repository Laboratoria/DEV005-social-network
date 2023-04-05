export function error() {
  const title = document.createElement('h2');

  title.textContent = 'Error 404: página no encontrada.';
  return title;
};

export default error;

