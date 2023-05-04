/**
 * @jest-environment jsdom
 */
import { editingPost, home } from '../src/templates/home.js';

// const mockNavigation = jest.fn();

describe('home', () => {
  test('esto es una funcion', () => {
    expect(typeof home).toBe('function');
  });

  test('Que el botón cerrar sesión exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const boton = html.querySelector('#logOut');
    expect(boton).not.toBe(undefined);
  });

  test('Que el botón editar exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const boton = html.querySelector('#btnEdit');
    expect(boton).not.toBe(undefined);
  });

  test('Que el botón eliminar exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const boton = html.querySelector('#btnDelete');
    expect(boton).not.toBe(undefined);
  });

  test('Que el botón para dar me gusta exista', () => {
    const html = document.createElement('div');
    html.append(home);
    const boton = html.querySelector('#btnLike');
    expect(boton).not.toBe(undefined);
  });
});

describe('editingPost', () => {
  test('esto es una funcion', () => {
    expect(typeof editingPost).toBe('function');
  });
});
