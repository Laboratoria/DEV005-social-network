// Función para mover etiquetas de formulario
// Agrega la clase 'active' al label cuando el input tiene el foco
// y la quita cuando el input pierde el foco y está vacío

export function labelMovement(inputs, labels) {
  inputs.forEach((input, index) => {
    const label = labels[index];
    input.addEventListener('click', () => {
      label.classList.add('active');
    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        label.classList.remove('active');
      }
    });
  });
}
