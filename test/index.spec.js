/**
 * @jest-environment jsdom
 */

import { login } from '../src/templates/login.js';
// import { register, registerFirebase } from '../src/templates/register.js';
// import { auth } from '../src/lib/index.js';

// especificar el modulo a mockear
describe('login', () => {
  test('esto es una funcion', () => {
    expect(typeof login).toBe('function');
  });
  test('hay un boton', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const boton = html.querySelector('#btnLogin');

    expect(boton).not.toBe(null);
  });
  test('hay un boton con click', () => {
    const html = document.createElement('div');
    html.appendChild(login());

    const boton = html.querySelector('#btnLogin');
    boton.click();

    expect(boton).not.toBe(null);
  });
});
