import { signup, signupFormSubmit, navigateToLogin } from '../src/components/signup.js';
import { signupApp } from '../src/lib/register.js';

// Test suite para la función `register`
describe('Create signup', () => {
  // Caso de prueba para verificar que 'register' es una función
  it('Is a function', () => {
    expect(typeof signup).toBe('function');
  });

  // Caso de prueba para verificar que se crean los elementos HTML correctamente
  it('Create all the HTML elements', () => {
    // Llamar a la función 'signup'
    const result = signup();
    // Verificar que se crean los elementos HTML esperados con las clases y atributos correctos
    expect(result.querySelector('.register-form')).toBeTruthy();
    expect(result.querySelector('.inp-register')).toBeTruthy();
    expect(result.querySelector('.btn-register')).toBeTruthy();
    expect(result.querySelector('.link-text')).toBeTruthy();
    expect(result.querySelector('.google-container')).toBeTruthy();
  });

  // Caso de prueba para verificar que los event listeners son añadidos correctamente
  it('Add the event listeners successfully', () => {
    // Llamar a la función 'register'
    const result = signup();
    // Verificar que se añaden los event listeners esperados
    expect(result.querySelector('.register-form')).toHaveProperty('submit');
    expect(result.querySelector('.links')).toHaveProperty('click');
  });
});
jest.mock('../src/lib/register.js', () => ({
  signupApp: jest.fn(),
}));

const inputEmailMock = { value: 'soypauli@test.com' };
const inputPasswordMock = { value: 'pauli2023' };
const registerErrorMock = { value: 'error' };

const handleSignupFormSubmit = signupFormSubmit(
  inputEmailMock,
  inputPasswordMock,
  registerErrorMock,
);

// Crear un objeto de evento simulado para el submit del formulario
const eventMock = {
  preventDefault: jest.fn(),
};
handleSignupFormSubmit(eventMock);

describe('signupFormSubmit', () => {
  it('should be a function', () => {
    expect(typeof signupFormSubmit).toBe('function');
  });
  it('should call signupApp', () => {
    expect(signupApp).toHaveBeenCalled();
  });
  it('should call signupApp with inpuEmailMock, inputPasswordMock and signupErrorMock', () => {
    expect(signupApp).toHaveBeenCalledWith(inputEmailMock, inputPasswordMock, registerErrorMock);
  });
  it('should call eventMock.preventDefault', () => {
    expect(eventMock.preventDefault).toHaveBeenCalled();
  });
});

describe('navigateToSignup', () => {
  it('Should call preventDefault and navigate to /login', () => {
    // Crear mocks de las dependencias
    const navigateToMock = jest.fn();

    // Llamar a la función con los mocks
    const preventRefresh = navigateToLogin(navigateToMock);
    preventRefresh(eventMock);

    // Verificar que preventDefault fue llamada en el evento simulado
    expect(eventMock.preventDefault).toHaveBeenCalled();

    // Verificar que navigateTo fue llamada con '/login'
    expect(navigateToMock).toHaveBeenCalledWith('/login');
  });
});
