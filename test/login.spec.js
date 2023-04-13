import { login, loginFormSubmit, navigateToSignup } from '../src/components/login.js';
import { loginApp } from '../src/lib/authentication.js';

describe('Create login', () => {
// b.función sea una función
  it('Is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('Create all the HTML elements', () => {
    const result = login();
    expect(result.querySelector('.inp-login')).toBeTruthy();
    expect(result.querySelector('.login-form')).toBeTruthy();
    expect(result.querySelector('.btn-login')).toBeTruthy();
    expect(result.querySelector('.link-text')).toBeTruthy();
    expect(result.querySelector('.google-container')).toBeTruthy();
  });

  // Caso de prueba para verificar que los event listeners son añadidos correctamente
  it('Add the event listeners successfully', () => {
    // Llamar a la función 'register'
    const result = login();
    // Verificar que se añaden los event listeners esperados
    expect(result.querySelector('.login-form')).toHaveProperty('submit');
    expect(result.querySelector('.links')).toHaveProperty('click');
  });
});

jest.mock('../src/lib/authentication.js', () => ({
  loginApp: jest.fn(),
}));

const inputEmailMock = { value: 'soypauli@test.com' };
const inputPasswordMock = { value: 'pauli2023' };
const loginErrorMock = { value: 'error' };

const handleLoginFormSubmit = loginFormSubmit(
  inputEmailMock,
  inputPasswordMock,
  loginErrorMock,
);

// Crear un objeto de evento simulado para el submit del formulario
const eventMock = {
  preventDefault: jest.fn(),
};
handleLoginFormSubmit(eventMock);

describe('loginFormSubmit', () => {
  it('should be a function', () => {
    expect(typeof loginFormSubmit).toBe('function');
  });
  it('should call loginApp', () => {
    expect(loginApp).toHaveBeenCalled();
  });
  it('should call loginApp with inpuEmailMock, inputPasswordMock and loginErrorMock', () => {
    expect(loginApp).toHaveBeenCalledWith(inputEmailMock, inputPasswordMock, loginErrorMock);
  });
  it('should call eventMock.preventDefault', () => {
    expect(eventMock.preventDefault).toHaveBeenCalled();
  });
});

describe('navigateToSignup', () => {
  it('Should call preventDefault and navigate to /signup', () => {
    // Crear mocks de las dependencias
    const navigateToMock = jest.fn();

    // Llamar a la función con los mocks
    const preventRefresh = navigateToSignup(navigateToMock);
    preventRefresh(eventMock);

    // Verificar que preventDefault fue llamada en el evento simulado
    expect(eventMock.preventDefault).toHaveBeenCalled();

    // Verificar que navigateTo fue llamada con '/signup'
    expect(navigateToMock).toHaveBeenCalledWith('/signup');
  });
});
