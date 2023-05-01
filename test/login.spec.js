/**
 * @jest-environment jsdom
 */
import * as firebaseAuth from 'firebase/auth';
import login from '../src/components/login.js';
import { loginConfig } from '../src/lib/loginConfig.js';
// import home from '../src/components/home.js';

jest.mock('firebase/auth', () => ({
  __esModule: true, //    <----- this __esModule: true is important
  ...jest.requireActual('firebase/auth'),
}));

describe('login es una funcion', () => {
  it('es una función', () => {
    expect(typeof login).toBe('function');
  });
  it('hay un boton', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const botonLogin = DOM.querySelector('.buttonReturn');
    expect(botonLogin).not.toBe(undefined);
  });
  it('despues de dar click al boton debe llamar a la funcion navigateTo a la ruta register', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    document.body.append(DOM);
    DOM.append(login(navigateTo));
    const botonMensaje = DOM.querySelector('.mensajelogin');
    botonMensaje.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
  it('despues de dar click al boton debe llamar a la funcion navigateTo a la ruta muro', (done) => {
    jest.spyOn(firebaseAuth, 'signInWithEmailAndPassword').mockResolvedValue({ user: 'angie' });
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    document.body.append(DOM);
    DOM.append(login(navigateTo));
    DOM.querySelector('#loginCorreo').value = 'angie1000@gmail.com';
    DOM.querySelector('#loginContra').value = 'angie1000';
    const botonIngreso = DOM.querySelector('.buttonReturn');
    botonIngreso.click();
    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/muro');
      done();
    });
  });
});
