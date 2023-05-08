/**
 * @jest-environment jsdom
 */
// import * as firebaseAuth from 'firebase/auth';
import muro from '../src/components/muro.js';

// jest.mock('firebase/auth', () => ({
//   __esModule: true, //    <----- this __esModule: true is important
//   ...jest.requireActual('firebase/auth'),
// }));

describe('Testeando muro.js', () => {
  it('muro -> debería ser una función', () => {
    expect(typeof muro).toBe('function');
  });
  it('hay un boton cerrar sesión', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const salirAhora = DOM.querySelector('.icon_exit');
    expect(salirAhora).not.toBe(undefined);
  });
  it('da click en la salida llama a la funcion navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    document.body.append(DOM);
    DOM.append(muro(navigateTo));
    const salirAhora = DOM.querySelector('.icon_exit');
    salirAhora.click();
    setTimeout((done) => {
      expect(navigateTo).toHaveBeenCalledWith('/');
      done();
    });
  });
});

// describe('Testeando muro.js', () => {
//   it('muro -> debería ser una función', () => {
//     expect(typeof muro).toBe('function');
//   });
//   it('hay un boton "salida"', () => {
//     const DOM = document.createElement('div');
//     DOM.append(muro());
//     const botonExit = DOM.querySelector('.icon_exit');
//     expect(botonExit).not.toBe(undefined);
//     setTimeout(() => {

//     });
//   });
//   it('test del boton "salir"', () => {
//     // const auth = jest.fn;
//     const signOut = jest.fn();
//     const DOM = document.createElement('div');
//     const navigateTo = jest.fn();
//     DOM.append(muro(navigateTo));
//     const botonExit = DOM.querySelector('.icon_exit');
//     botonExit.click();
//     expect(signOut).toHaveBeenCalledTimes(3);
//     setTimeout(() => {
//     });
//   });
// }
//   it('da click en la salida llama a la funcion navigateTo', (done) => {
//     const mock = jest.fn().mock.calls;
//     const DOM = document.createElement('div');
//     const navigateTo = jest.fn().mockReturnValue('/');
//     DOM.append(muro(navigateTo));
//     const salirAhora = DOM.querySelector('.icon_exit');
//     salirAhora.click();
//     expect(mock).toHaveBeenCalledTimes(0);
//     expect(navigateTo).toHaveBeenLastCalledWith('/');
//     setTimeout(() => {
//       done();
//     });
//   });
// });
