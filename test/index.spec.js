// Importamos la funcion que vamos a testear
import { create, login } from '../src/Components/app.js';

// Función: Inicia Sesión
describe('login', () => {
  it('Si el usuario ingreso correctamente su gmail y su contraseña deberia ir a home', () => {
    document.body.innerHTML(login());
    document.getElementById(btningresar).click();
    expect(typeof myFunction).tobe('function');
  });
});

// Función registrate
describe('create', () => {
  it('Si el usuario se registro correctamente deberia ir a home', () => {
    document.body.innerHTML(create());
    document.getElementById(btnguardar).click();
    expect(typeof myFunction).tobe('function');
  });
});
