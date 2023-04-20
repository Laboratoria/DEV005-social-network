// import { navigateTo } from '../src/main.js';
import { login } from '../src/Components/login.js';
/* import { signIn } from '../src/lib/auth.js'; */

// jest.mock('../src/lib/firebase.js');
const navigateTo = jest.fn();

// Función: Inicia Sesión
describe('login', () => {
  test('is a function ', () => {
    expect(typeof login).toBe('function');
  });
  it('Si el usuario le da click a getIn, debe cambiar de ruta', () => {
    const myHtml = login(navigateTo);
<<<<<<< HEAD
    myHtml.querySelector('.getInt').click();
    expect(navigateTo).toHaveBeenCalledWith('/emprend');
=======
    myHtml.querySelector('.formInteraction').submit();
    expect(navigateTo).toHaveBeenCalledWith('/emprende');
>>>>>>> 4837291d77dd693449602fcb49af65d8469fc02f
  });
  /* it('Si el usuario ingresa correctamente su gmail y su contraseña debería ir a home', () => {
    const myHtml = login(navigateTo);
    const email = myHtml.querySelector('.inputEmail');
    const password = myHtml.querySelector('.inputPassword');
    email.value = 'amigas@gmail.com';
    password.value = '123456';
    const button = myHtml.querySelector('.formInteraction');
    button.submit();
    expect(navigateTo).toHaveBeenCalledWith('/emprende');
  }); */
  it('Si el usuario no le da click a getIn, no debe cambiar de ruta', () => {
    login(navigateTo);
    expect(navigateTo).not.toHaveBeenCalledWith();
  });
  it('Si el usuario desea crear cuenta debería ir a la pantalla crear cuenta', () => {
    const myHtml = login(navigateTo);
    myHtml.querySelector('.bottomTextLogin').click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
});
