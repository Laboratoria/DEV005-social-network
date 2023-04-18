function mainScreen() {
  const postForm = document.createElement('div');
  postForm.classList.add('mainScreen');
  postForm.innerHTML = `
    <form>
    <textarea class="postForm" placeholder= "Comparte tu negocio..."></textarea>
    <button type= "submit" class= "post" > Publicar </button>
    </form>`;
  return postForm;
}

export { mainScreen };
