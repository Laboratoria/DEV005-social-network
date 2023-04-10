// Función para mover etiquetas de formulario
// Agrega la clase 'active' al label cuando el input tiene el foco
// y la quita cuando el input pierde el foco y está vacío

function labelMovement(inputs) {
  inputs.forEach((input) => {
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
}

// Obtener elementos del DOM

// Verificar que elementos están cargados en el DOM
document.addEventListener('DOMContentLoaded', () => {
  const inputsLogin = document.querySelectorAll('.inp-login');
  const inputsRegister = document.querySelectorAll('.inp-register');
  // Si el botón de inicio de sesión existe, agregar evento click
  // Agregar movimiento de etiqueta a los inputs necesarios
  labelMovement(inputsLogin);
  labelMovement(inputsRegister);
});
