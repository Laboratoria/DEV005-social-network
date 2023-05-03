/**
 * @jest-environment jsdom
 */
import muro from '../src/components/muro.js';

describe('Testeando muro.js', () => {
  it('muro -> debería ser una función', () => {
    expect(typeof muro).toBe('function');
  });
  it('da click en la salida llama a la funcion navigateTo', (done) => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(muro(navigateTo));
    const salirAhora = DOM.querySelector('.icon_exit');
    salirAhora.click();
    expect(navigateTo).toHaveBeenCalled();
    expect(navigateTo).toHaveBeenCalledTimes(3);
    setTimeout(() => {
      done();
    });
  });
});
