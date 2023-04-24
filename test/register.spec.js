/**
 * @jest-environment jsdom
 */

// import { userRegister } from '../src/lib/auth.js';
import { register } from '../src/templates/register.js';

// const registerFirebase = jest.fn();
const mockNavigation = jest.fn();
// const email = document.querySelector('#emailReg');
// const password = document.querySelector('#passwordReg');

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

  test('debe regresar a la página de inicio de sesión cuando se hace clic en el botón "Iniciar sesión', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const btnVolverInicio = html.querySelector('#btnIniciaSesion');
    btnVolverInicio.click();
    expect(mockNavigation).toHaveBeenCalledWith('/');
  });

  test('Verificar los elementos HTML', () => {
    const resultado = register();
    expect(resultado.querySelector('.contenedorIngresoRegistro')).toBeTruthy();
    expect(resultado.querySelector('.contenedorInput')).toBeTruthy();
    expect(resultado.querySelector('.btnCrearCuenta')).toBeTruthy();
    expect(resultado.querySelector('.btnRegistro')).toBeTruthy();
  });
  /*
  test('debe llamar a registerFirebase cuando se hace clic en el botón "Registrar"', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const btnCrearCuenta = html.querySelector('#btnCrearCuenta');
    btnCrearCuenta.click();
    expect(registerFirebase).toHaveBeenCalledTimes(1);
  });
  */
  test('debe tener un elemento de entrada de correo electrónico', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const email = html.querySelector('#emailReg');
    expect(email).toBeDefined();
    expect(email).not.toBe(null);
  });

  test('debe tener un elemento de entrada de contraseña', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const password = html.querySelector('#passwordReg');
    expect(password).toBeDefined();
    expect(password).not.toBe(null);
  });

  /*
  // hacer clic en el botón "Registrar" con una entrada válida crea una nueva cuenta
  test('Al hacer click crea cuenta', () => {
    const userRegisterMock = jest.fn();
    const html = document.createElement('div');
    html.appendChild(register(userRegisterMock));
    const email = html.querySelector('#emailReg');
    const password = html.querySelector('#passwordReg');
    email.value = 'test@test.com';
    password.value = '123456';
    const btnCrearCuenta = html.querySelector('#btnCrearCuenta');
    btnCrearCuenta.addEventListener('click', () => {
      userRegisterMock();
    });
    expect(userRegisterMock).toHaveBeenCalled();
  });

  test('Al hacer click en input limpia el campo de texto', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const email = html.querySelector('#emailReg');
    const errorEmail = html.querySelector('#errorEmail');
    email.addEventListener('click', () => {
      email.value = '';
    });
    expect(errorEmail.value).toBe('');
  });
  */
});
