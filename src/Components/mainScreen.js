function mainScreen() {
  const postForm = document.createElement('form');
  postForm.innerHTML = `
    <form>
    <textarea class="postForm" placeholder= "Comparte tu negocio..."></textarea>
    <button type= "submit" class= "post" > Publicar </button>
    </form>`;
  return postForm;
}

export { mainScreen };
