// import { navigateTo } from '../src/main.js';
import { login } from '../src/Components/login.js';

// jest.mock('../test/__mock__/main.js');
const navigateTo = jest.fn();

// Función: Inicia Sesión
describe('login', () => {
  it('Si el usuario ingresa correctamente su gmail y su contraseña debería ir a home', () => {
    const myHtml = login(navigateTo);
    myHtml.querySelector('.getInt').click();
    expect(navigateTo).toHaveBeenCalledWith('/emprend');
  });
  it('Si el usuario no le da click a getIn, no debe cambiar de ruta', () => {
    login(navigateTo);
    expect(navigateTo).not.toHaveBeenCalledWith();
  });
  it('Si el usuario desea crear cuenta debería ir a la pantalla crear cuenta', () => {
    const myHtml = login(navigateTo);
    myHtml.querySelector('.bottomText').click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
});
