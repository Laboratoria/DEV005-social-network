// importamos la funcion que vamos a testear
import { loginEmailPassword } from '../src/lib/auth.js';

describe('loginEmailPassword', () => {
  it('Is a function', () => {
    expect(typeof loginEmailPassword).toBe('function');
  });
});
