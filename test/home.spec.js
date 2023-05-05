/**
 * @jest-environment jsdom
 */
// import { app, getPost } from '../src/lib/index.js';
import { editingPost, home, likePost } from '../src/templates/home.js';

// const currentUserEmail = 'test@example.com';
// eslint-disable-next-line max-len
// const getPostMock = jest.fn(() => Promise.resolve({ exists: true, data: { likes: [currentUserEmail] } }));
describe('home', () => {
  test('esto es una funcion', () => {
    expect(typeof home).toBe('function');
  });

  test('Que el botón cerrar sesión exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const button = html.querySelector('#logOut');
    expect(button).not.toBe(undefined);
  });

  test('Que el botón editar exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const button = html.querySelector('#btnEdit');
    expect(button).not.toBe(undefined);
  });

  test('Que el botón eliminar exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const button = html.querySelector('#btnDelete');
    expect(button).not.toBe(undefined);
  });

  test('Que el botón para dar me gusta exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const button = html.querySelector('#btnLike');
    expect(button).not.toBe(undefined);
  });

  test('Render de logo home', () => {
    const section = home();
    const logo = section.querySelector('.imgLogoHome');
    expect(logo).toBeTruthy();
  });

  test('Render de mensaje de bienvenida', () => {
    const section = home();
    const welcomeMessage = section.querySelector('h1');
    expect(welcomeMessage.textContent).toBe('Bienvenida a Mascoteando');
  });

  test('Test formulario de los post', () => {
    const section = home();
    const postForm = section.querySelector('#post-form');
    expect(postForm).toBeTruthy();
  });
});

describe('editingPost', () => {
  test('esto es una funcion', () => {
    expect(typeof editingPost).toBe('function');
  });
});

describe('likePost', () => {
  test('esto es una funcion', () => {
    expect(typeof likePost).toBe('function');
  });
});
