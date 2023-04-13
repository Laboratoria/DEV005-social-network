// Importamos la funcion que vamos a testear
import { login } from '../src/Components/app.js';
import { navigateTo } from '../src/main.js';

// Función: Inicia Sesión
describe('login', () => {
  it('Si el usuario ingresa correctamente su gmail y su contraseña debería ir a home', () => {
    const myHtml = login();
    myHtml.querySelector('.getInt').click();
    expect(navigateTo).haveBeenCalledWith('/mainScreen');
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
