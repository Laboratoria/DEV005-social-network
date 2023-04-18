function home() {
  const postForm = document.createElement('div');
  postForm.classList.add('home');
  postForm.innerHTML = `
    <img src='./lib/img/fondoHome.png' class= 'logoHome'>
    <form>
    <textarea class="postForm" placeholder= "Comparte tu negocio..."></textarea>
    <button type= "submit" class= "post" > Publicar </button>
    </form>`;
  return postForm;
}

export { home };
