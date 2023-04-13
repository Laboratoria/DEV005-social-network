// Importamos la funcion que vamos a testear

/**
 * @jest-environment jsdom
 */

// import { navigateTo } from '../src/main.js';
import { login } from '../src/lib/index';

// jest.mock('../test/__mock__/main.js');
const navigateTo = jest.fn();

// Función: Inicia Sesión
describe('login', () => {
  it('Si el usuario ingresa correctamente su gmail y su contraseña debería ir a home', () => {
    const myHtml = login(navigateTo);
    myHtml.querySelector('.getInt').click();
    expect(navigateTo).toHaveBeenCalledWith('/mainScreen');
  });
  it('Si el usuario no le da click a getIn, no debe cambiar de ruta', () => {
    login(navigateTo);
    expect(navigateTo).not.toHaveBeenCalledWith();
  });
});

// Función registrate
// describe('create', () => {
//   it('Si el usuario se registro correctamente deberia ir a home', () => {
//     document.body.innerHTML(create());
//     document.getElementById(btnguardar).click();
//     console.log(credential);
//     expect(typeof myFunction).tobe('function');
//   });
// });
