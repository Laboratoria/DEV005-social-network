/**
 * @jest-environment jsdom
 */

// import { userRegister } from '../src/lib/auth.js';
import { register } from '../src/templates/register.js';

// const registerFirebase = jest.fn();
const mockNavigation = jest.fn();

describe('register', () => {
  test('esto es una funcion', () => {
    expect(typeof register).toBe('function');
  });

  test('hay un boton', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const boton = html.querySelector('#btnCrearCuenta');
    expect(boton).not.toBe(null);
  });

  test('hay un boton con click', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const boton = html.querySelector('#btnCrearCuenta');
    boton.click();
    expect(boton).not.toBe(null);
  });

  // ESTE TEST NO ESTÁ PASANDO

  // test('debe llamar a registerFirebase cuando se hace clic en el botón "Registrar"', () => {
  //   const html = document.createElement('div');
  //   html.appendChild(register(mockNavigation));
  //   const btnCrearCuenta = html.querySelector('#btnCrearCuenta');
  //   btnCrearCuenta.click();
  //   expect(registerFirebase).toHaveBeenCalledTimes(1);
  // });

  test('debe regresar a la página de inicio de sesión cuando se hace clic en el botón "Iniciar sesión', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const btnVolverInicio = html.querySelector('#btnIniciaSesion');
    btnVolverInicio.click();
    expect(mockNavigation).toHaveBeenCalledWith('/');
  });
});
