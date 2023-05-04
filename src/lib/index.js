// Movimiento de los labels
export function labelMovement(input, label) {
  input.addEventListener('click', () => {
    label.classList.add('active');
  });
  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
}
