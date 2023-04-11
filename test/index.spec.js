import { login } from '../src/components/login.js';
// Importar la función `register` y otras dependencias necesarias
import { signup } from '../src/components/signup.js';

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

// Test suite para la función `register`
describe('Create signup', () => {
  // Caso de prueba para verificar que 'register' es una función
  it('Is a function', () => {
    expect(typeof signup).toBe('function');
  });

  // Caso de prueba para verificar que se crean los elementos HTML correctamente
  it('Create all the HTML elements', () => {
    // Llamar a la función 'signup'
    const result = signup();
    // Verificar que se crean los elementos HTML esperados con las clases y atributos correctos
    expect(result.querySelector('.register-form')).toBeTruthy();
    expect(result.querySelector('.inp-register')).toBeTruthy();
    expect(result.querySelector('.btn-register')).toBeTruthy();
    expect(result.querySelector('.link-text')).toBeTruthy();
    expect(result.querySelector('.google-container')).toBeTruthy();
  });

  // Caso de prueba para verificar que los event listeners son añadidos correctamente
  it('Add the event listeners successfully', () => {
    // Llamar a la función 'register'
    const result = signup();
    // Verificar que se añaden los event listeners esperados
    expect(result.querySelector('.register-form')).toHaveProperty('submit');
    expect(result.querySelector('.links')).toHaveProperty('click');
  });
});
