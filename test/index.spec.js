/*
 * @jest-environment jsdom
 */

import { singin, loginGoogle } from '../src/lib/auth.js';
import LoginTemplate from '../src/templates/loginTemplate.js';
import { Login } from '../src/DOM/Login.js';
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
  /* test('debería llamar a inicia con Google', () => {
    const DOM = document.createElement('div');
    const onNavigate = jest.fn();
    DOM.append(Login(onNavigate));
    const btnloginGoogle = DOM.querySelector('#btn-google');
    btnloginGoogle.click();
    expect(loginGoogle()).toHaveBeenCalledTimes(1);
  }); */
  describe('Boton ingresar', () => {
    test('Deberia poder ingresar', (done) => {
      jest.spyOn(auth, 'addUserToSocialNetwork').mockImplementation(() => Promise.resolve({ message: 'success', email: 'test@test.com' }));
      const DOM = document.createElement('div');
      DOM.append(Login());
      const onNavigate = jest.fn();
      const email = DOM.querySelector('#email');
      const password = DOM.querySelector('#password');
      email.value = 'test@test.com';
      password.value = '123456';
      /* const answer = DOM.querySelector('#answer'); */
      const buttonLogin = DOM.querySelector('#signIn');
      buttonLogin.submit();
      expect(auth.addUserToSocialNetwork).toHaveBeenCalledTimes(1);
      expect(auth.addUserToSocialNetwork).toHaveBeenLastCalledWith('test@test.com', '123456');
      setTimeout(() => {
        expect(onNavigate).toHaveBeenLastCalledWith('/muro');
        done();
      }, 0);
    });
  });
});

describe('Iniciar sesión con un correo y una contraseña', () => {
  test('singin debería ser una funcion', () => {
    expect(typeof singin).toBe('function');
  });
});
