// Mostrar o esconder labels
const inputs = document.getElementsByClassName('inp-signin');

Array.from(inputs).forEach((input) => {
  const label = document.querySelector(`label[for="${input.id}"]`);

  input.addEventListener('click', () => {
    label.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
});
