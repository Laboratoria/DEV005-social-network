/**
 * @jest-environment jsdom
 */
import { register } from '../src/templates/register.js';

const mockNavigation = jest.fn();
describe('register', () => {
  test('esto es una funcion', () => {
    expect(typeof register).toBe('function');
  });

  test('Hay un boton', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const button = html.querySelector('#btnCreateAccount');
    expect(button).not.toBe(null);
  });

  test('Hay un botón con clic', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const button = html.querySelector('#btnCreateAccount');
    button.click();
    expect(button).not.toBe(null);
  });

  test('Tiene dos botones', () => {
    const html = document.createElement('div');
    html.appendChild(register());
    const buttons = html.querySelector('#btnCreateAccount, #linkLogin');
    expect(buttons).not.toBe(undefined);
  });

  test('Verifica el elemento link', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const element = html.querySelector('#linkLogin');
    element.click();
    expect(element).toBeDefined();
  });

  test('Verificar los elementos HTML', () => {
    const result = register(mockNavigation);
    expect(result.querySelector('.containerLoginRegister')).toBeTruthy();
    expect(result.querySelector('.containerInput')).toBeTruthy();
    expect(result.querySelector('.btnCreateAccount')).toBeTruthy();
  });

  test('Debe tener un elemento de entrada de correo electrónico', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const email = html.querySelector('#emailReg');
    expect(email).toBeDefined();
    expect(email).not.toBe(null);
  });

  test('Debe tener un elemento de entrada de contraseña', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const password = html.querySelector('#passwordReg');
    expect(password).toBeDefined();
    expect(password).not.toBe(null);
  });

  test('Span debe cambiar el tipo del input con click', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const email = html.querySelector('.email');
    const password = html.querySelector('.password');
    email.click();
    expect(email.type).toBe('email');
    password.click();
    expect(password.type).toBe('password');
  });
});
