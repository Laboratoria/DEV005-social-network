import { login } from '../src/components/login.js';
// Importar la función `register` y otras dependencias necesarias

describe('Create login', () => {
// b.función sea una función
  it('Is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('Create all the HTML elements', () => {
    const result = login();
    expect(result.querySelector('.inp-login')).toBeTruthy();
    expect(result.querySelector('.login-form')).toBeTruthy();
    expect(result.querySelector('.btn-login')).toBeTruthy();
    expect(result.querySelector('.link-text')).toBeTruthy();
    expect(result.querySelector('.google-container')).toBeTruthy();
  });

  // Caso de prueba para verificar que los event listeners son añadidos correctamente
  it('Add the event listeners successfully', () => {
    // Llamar a la función 'register'
    const result = login();
    // Verificar que se añaden los event listeners esperados
    expect(result.querySelector('.login-form')).toHaveProperty('submit');
    expect(result.querySelector('.links')).toHaveProperty('click');
  });
});
