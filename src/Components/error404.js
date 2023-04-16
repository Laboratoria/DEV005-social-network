function error404() {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Error 404, no podemos cargar la pagina, por favor ve al home';
  return paragraph;
}
export default error404;
