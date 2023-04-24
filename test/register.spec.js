/**
 * @jest-environment jsdom
 */

// import { userRegister } from '../src/lib/auth.js';
import { register } from '../src/templates/register.js';

const registerFirebase = jest.fn();
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

  test('debe llamar a registerFirebase cuando se hace clic en el botón "Registrar"', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const btnCrearCuenta = html.querySelector('#btnCrearCuenta');
    btnCrearCuenta.click();
    expect(registerFirebase).toHaveBeenCalledTimes(1);
  });

  test('debe tener un elemento de entrada de correo electrónico', () => {
    const html = document.createElement('div');
    html.appendChild(register(mockNavigation));
    const email = document.querySelector('#emailReg');
    expect(email).toEqual('#emailReg');
  });

  test('debe tener un elemento de entrada de contraseña', () => {
    const html = document.createElement('div');
    const password = document.querySelector('#passwordReg');
    html.appendChild(register(mockNavigation));
    expect(password).toEqual('input');
    expect(password).toEqual('#passwordReg');
  });

  // hacer clic en el botón "Registrar" con una entrada válida crea una nueva cuenta
  test('Al hacer click crea cuenta', () => {
    const userRegisterMock = jest.fn();
    const section = register();
    const email = section.querySelector('#emailReg');
    const password = section.querySelector('#passwordReg');
    email.value = 'test@test.com';
    password.value = '123456';
    const btnCrearCuenta = section.querySelector('#btnCrearCuenta');
    btnCrearCuenta.click();
    expect(userRegisterMock).toHaveBeenCalledWith(1);
  });

  test('Al hacer click en contraseña de correo electrónico no válida', () => {
    const navigation = jest.fn();
    const registerSection = register(navigation);

    const emailInput = registerSection.querySelector('#emailReg');
    const passwordInput = registerSection.querySelector('#passwordReg');
    const registerButton = registerSection.querySelector('#btnCrearCuenta');

    emailInput.value = 'invalidemail';
    passwordInput.value = 'short';

    registerButton.click();

    const errorEmail = registerSection.querySelector('#errorEmail');
    const errorPassword = registerSection.querySelector('#errorPassword');

    expect(errorEmail.innerHTML).toBeTruthy('Ingrese un correo electrónico válido');
    expect(errorPassword.innerHTML).toBeTruthy('La contraseña debe tener al menos 6 caracteres');
  });
});
