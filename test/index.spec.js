/**
 * @jest-environment jsdom
 */

import { login } from '../src/templates/login.js';
// especificar el modulo a mockear 
describe('login', () => {
  test('esto es una funcion', () => {
    expect(typeof login).toBe('function');
  });
  test('hay un boton', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const boton = html.querySelector('#btnInicio');

    expect(boton).not.toBe(null);
  });
  test('hay un boton con click', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const boton = html.querySelector('#btnInicio');
    boton.click();

    expect(boton).not.toBe(null);
  });
});
