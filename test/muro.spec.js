/**
 * @jest-environment jsdom
 */
// import * as firebaseAuth from 'firebase/app';
import muro from '../src/components/muro.js';

describe('Testeando muro.js', () => {
  it('muro -> debería ser una función', () => {
    expect(typeof muro).toBe('function');
  });
  it('da click en la salida llama a la funcion navigateTo', (done) => {
    const mock = jest.fn().mock.calls;
    const DOM = document.createElement('div');
    const navigateTo = jest.fn().mockReturnValue('/');
    DOM.append(muro(navigateTo));
    const salirAhora = DOM.querySelector('.icon_exit');
    salirAhora.click();
    expect(mock).toHaveBeenCalledTimes(0);
    expect(navigateTo).toHaveBeenLastCalledWith('/');
    setTimeout(() => {
      done();
    });
  });
});
