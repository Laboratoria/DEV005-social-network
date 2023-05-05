/**
 * @jest-environment jsdom
 */
import { login } from '../src/Components/login.js';
import { home } from '../src/Components/home.js';
import * as postFn from '../src/lib/post.js';

jest.mock('firebase/firestore');
jest.mock('../src/lib/post.js', () => ({
  signIn: jest.fn(),
}));
jest.mock('../src/lib/post.js', () => ({
  post: jest.fn(),
  ref: jest.fn(),
}));
const navigateTo = jest.fn();
// Función: Inicia Sesión
describe('login', () => {
  test('login: is a function ', () => {
    expect(typeof login).toBe('function');
  });
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

// Home
describe('home', () => {
  test('home: is a function ', () => {
    expect(typeof home).toBe('function');
  });

  it('contiene un boton de salir', () => {
    const DOM = document.createElement('div');
    DOM.append(home());
    const haveAButton = DOM.querySelector('.goOut-btn');
    expect(haveAButton).not.toBe(undefined);
  });

  it('Si el usuario da click en botón Salir, navega a inicio de sesión', () => {
    const salir = home(navigateTo);
    salir.querySelector('.goOut').click();
    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/');
    }, 0);
  });

  it('Si el usuario crea un post se debe guardar', () => {
    const createPost = postFn.post.mockResolvedValueOnce({ info: '', userEmail: 'test@test.com' });
    const section = home(navigateTo);
    section.querySelector('.areaPost').value = '0test post';
    section.querySelector('.post').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(createPost).toHaveBeenCalledTime(1);
    }, 0);
  });
  it('Si el usuario deja el campo de post vacio sale una alerta', () => {
    postFn.post.mockResolvedValueOnce({ user: { email: 'prueba@gmail.com' } });
    const section = home(navigateTo);
    section.querySelector('.areaPost').value = '0test post';
    section.querySelector('.post').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledTime('Ingrese post');
    }, 0);
  });
});
