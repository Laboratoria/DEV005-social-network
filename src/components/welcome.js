function welcome() {
  const section = document.createElement('section');
  const title = document.createElement('h2');

  title.textContent = 'bievenido a la pagina';
  section.append(title);
  return section;
}
export default welcome;
