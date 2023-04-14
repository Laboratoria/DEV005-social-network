// importamos la funcion que vamos a testear
/* import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
 */
/* import { auth, signInWithPopup } from 'firebase/auth'; */
import { singin, loginGoogle } from '../src/lib/auth.js';

/* jest.mock('../src/lib/index.js', () => ({
  auth: jest.fn(() => ({ auth: 'test' })),
  createUserWithEmailAndPassword: jest.fn((_auth, email, password) => {
    if (!email || !password) {
      throw new Error('Error');
    }
    Promise.resolve({
      email1: 'sus',
    });
  }),
})); */

describe('Debería poder iniciar sesión con Google', () => {
  it('googleLog debería ser una funcion', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe('Debería poder iniciar sesión con un correo y una contraseña', () => {
  it('singin debería ser una funcion', () => {
    expect(typeof singin).toBe('function');
  });
});
