import { login } from '../src/components/login.js';
import { signup } from '../src/components/signup.js';

describe('Build login', () => {
// b.función sea una función
  it('Is a function', () => {
    expect(typeof login).toBe('function');
  });
  it('Create a html element', () => {
    const result = login();
    expect(result.querySelector('.inp-login')).toBeTruthy();
  });
  it('Create all login inputs', () => {
    const result = login();
    expect(result.querySelectorAll('.inp-login')).toHaveLength(2);
  });
});

// Test suite para la función `register`
describe('Build signup', () => {
  // Caso de prueba para verificar que 'register' es una función
  it('Is a function', () => {
    expect(typeof signup).toBe('function');
  });
  // Caso de prueba para verificar que se crean los elementos HTML correctamente
  it('Create all the HTML elements', () => {
    // Llamar a la función 'register'
    const result = signup();
    // Verificar que se crean los elementos HTML esperados con las clases y atributos correctos
    expect(result.querySelector('.register-form')).toBeTruthy();
    expect(result.querySelector('.inp-register')).toBeTruthy();
    expect(result.querySelector('.btn-register')).toBeTruthy();
    expect(result.querySelector('.link-text')).toBeTruthy();
    expect(result.querySelector('.google-container')).toBeTruthy();
  });
  // Caso de prueba para verificar que los event listeners son añadidos correctamente
  it('Add the event listeners succesfully', () => {
    // Llamar a la función 'signup'
    const result = signup();
    // Verificar que se añaden los event listeners esperados
    expect(result.querySelector('.register-form')).toHaveProperty('submit');
    expect(result.querySelector('.links')).toHaveProperty('click');
    expect(result.querySelector('.btn-register')).toHaveProperty('click');
  });
});
