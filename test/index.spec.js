/*
 * @jest-environment jsdom
 */
import { singin, loginGoogle, singup } from '../src/lib/auth.js';
import LoginTemplate from '../src/templates/loginTemplate.js';
import WallTemplate from '../src/templates/wallTemplate.js';
import { Login } from '../src/DOM/Login.js';
import { Register } from '../src/DOM/Register.js';
import { Wall } from '../src/DOM/Wall.js';
import * as auth from '../src/lib/auth.js';

describe('Iniciar sesión con Google', () => {
  test('googleLog debería ser una funcion', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(LoginTemplate);
    const haveAButton = DOM.querySelector('#btn-login');
    expect(haveAButton).not.toBe(undefined);
  });
  test('deberia llamar a onNavigate', () => {
    const DOM = document.createElement('div');
    const onNavigate = jest.fn();
    DOM.append(Login(onNavigate));
    const register = DOM.querySelector('#linkRegister');
    register.click();
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });
  test('deberia llamar a  /register ', () => {
    const DOM = document.createElement('div');
    const onNavigate = jest.fn();
    DOM.append(Login(onNavigate));
    const register = DOM.querySelector('#linkRegister');
    register.click();
    expect(onNavigate).toHaveBeenLastCalledWith('/registrate');
  });
  describe('Inicio de Sesión con correo y contraseña', () => {
    test('singin debería ser una funcion', () => {
      expect(typeof singin).toBe('function');
    });
    test('Deberia poder ingresar', () => {
      jest.spyOn(auth, 'singin').mockImplementation(() => Promise.resolve({ email: 'test@test.com' }));
      const DOM = document.createElement('div');
      DOM.append(Login());
      const email = DOM.querySelector('#email');
      const password = DOM.querySelector('#password');
      email.value = 'test@test.com';
      password.value = '123456';
      const buttonLogin = DOM.querySelector('#signIn');
      buttonLogin.submit();
      expect(auth.singin).toHaveBeenCalledTimes(1);
      expect(auth.singin).toHaveBeenLastCalledWith('test@test.com', '123456');
      setTimeout((done) => {
        const onNavigate = jest.fn();
        DOM.append(Login(onNavigate));
        expect(onNavigate).toHaveBeenLastCalledWith('/muro');
        done();
      }, 0);
    });
  });
});

describe('Registrarse', () => {
  test('Es una funcion', () => {
    expect(typeof singup).toBe('function');
  });
  test('Deberia poder ingresar', () => {
    jest.spyOn(auth, 'singup').mockImplementation(() => Promise.resolve({ email: 'test@test.com' }));
    const DOM = document.createElement('div');
    DOM.append(Register());
    const email = DOM.querySelector('#email');
    const password = DOM.querySelector('#password');
    email.value = 'test@test.com';
    password.value = '123456';
    const buttonRegister = DOM.querySelector('#signup');
    buttonRegister.submit();
    expect(auth.singup).toHaveBeenCalledTimes(1);
    expect(auth.singup).toHaveBeenLastCalledWith('test@test.com', '123456');
    setTimeout((done) => {
      const onNavigate = jest.fn();
      DOM.append(Register(onNavigate));
      expect(onNavigate).toHaveBeenLastCalledWith('/muro');
      done();
    }, 0);
  });
  test('deberia llamar a  / ', () => {
    const DOM = document.createElement('div');
    const onNavigate = jest.fn();
    DOM.append(Register(onNavigate));
    const register = DOM.querySelector('#linkLogin');
    register.click();
    expect(onNavigate).toHaveBeenLastCalledWith('/');
  });
});

describe('Muro', () => {
  test('Es una funcion', () => {
    expect(typeof Wall).toBe('function');
  });
  test('Que el botón salir exista', () => {
    const DOM = document.createElement('div');
    DOM.append(WallTemplate);
    const haveAButton = DOM.querySelector('#btn-out');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Que el botón editar exista', () => {
    const DOM = document.createElement('div');
    DOM.append(WallTemplate);
    const haveAButton = DOM.querySelector('#btn-edit');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Que el botón eliminar exista', () => {
    const DOM = document.createElement('div');
    DOM.append(WallTemplate);
    const haveAButton = DOM.querySelector('#btn-delete');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Que el botón para dar me gusta exista', () => {
    const DOM = document.createElement('div');
    DOM.append(WallTemplate);
    const haveAButton = DOM.querySelector('#btn-like');
    expect(haveAButton).not.toBe(undefined);
  });
});
