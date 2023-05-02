import { labelMovement } from '../src/lib/index.js';

describe('labelMovement', () => {
  let input;
  let label;
  let addEventListenerMock;

  beforeEach(() => {
    // Crear elementos ficticios
    input = {
      value: '',
      addEventListener: jest.fn(),
    };

    label = {
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
      },
    };

    // Función mock para addEventListener
    addEventListenerMock = input.addEventListener.mock;

    // Llamar a la función labelMovement con los elementos ficticios
    labelMovement(input, label);
  });

  it('Agrega la clase "active" al label cuando el input es clickeado', () => {
    const clickCallback = addEventListenerMock.calls.find(([event]) => event === 'click')[1];
    clickCallback();

    expect(label.classList.add).toHaveBeenCalledWith('active');
  });

  it('Remueve la clase "active" del label cuando el input pierde el foco y está vacío', () => {
    const blurCallback = addEventListenerMock.calls.find(([event]) => event === 'blur')[1];
    blurCallback();

    expect(label.classList.remove).toHaveBeenCalledWith('active');
  });

  it('Mantiene la clase "active" en el label cuando el input pierde el foco y tiene contenido', () => {
    input.value = 'contenido';
    const blurCallback = addEventListenerMock.calls.find(([event]) => event === 'blur')[1];
    blurCallback();

    expect(label.classList.remove).not.toHaveBeenCalled();
  });
});
