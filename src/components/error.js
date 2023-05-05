function error() {
  const title = document.createElement('h1');
  title.textContent = 'Error 404, page not found. Go home';
  return title;
}

export default error;
