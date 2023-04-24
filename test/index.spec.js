import { labelMovement } from '../src/lib';

describe('labelMovement', () => {
  const input = document.createElement('input');
  const label = document.createElement('label');
  label.classList.add('label');
  document.body.appendChild(input);
  document.body.appendChild(label);
  labelMovement(input, label);
  it('click adds active class', () => {
    // Ejecuta el evento click en el input
    input.click();
    // Verifica que la clase 'active' se haya añadido del label
    expect(label.classList.contains('active')).toBe(true);
  });
  it('blur adds remove class', () => {
    // Ejecuta el evento blur en el input
    // Debemos simular el evento blur porque no es detectado
    input.dispatchEvent(new Event('blur'));
    // Verifica que la clase 'active' se haya eliminado del label
    expect(label.classList.contains('active')).toBe(false);
  });
});
