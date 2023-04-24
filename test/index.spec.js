/*
 * @jest-environment jsdom
 */

import { singin, loginGoogle } from '../src/lib/auth.js';
import LoginTemplate from '../src/templates/loginTemplate.js';

describe('Iniciar sesión con Google', () => {
  it('googleLog debería ser una funcion', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(LoginTemplate);
    const haveAButton = DOM.querySelector('#btn-login');
    expect(haveAButton).not.toBe(undefined);
  });
});

describe('Iniciar sesión con un correo y una contraseña', () => {
  it('singin debería ser una funcion', () => {
    expect(typeof singin).toBe('function');
  });
});
